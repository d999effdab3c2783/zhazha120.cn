import { isNotNil } from 'es-toolkit'
import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

import { useApiStore } from '~/stores/api'
import contacts from '~/stores/owner/contacts'
import { avatar, name, poke, notes, birthday as birthdayDate } from '~/stores/owner/information'
import portals from '~/stores/owner/portals'
import { title as timelineNotesTitle, items as timelineNotesItems } from '~/stores/owner/timeline/notes'
import type { OwnerBirthdayRecord, OwnerBirthdayRecordEntry } from '~/types/owner'

export const useOwnerStore = defineStore('owner', () => {
	const apiStore = useApiStore()

	const birthdayRecords = shallowRef<OwnerBirthdayRecordEntry[]>([])

	const handlePoke = () => {
		if (isNotNil(apiStore.message)) {
			apiStore.message.create(poke)
		}
	}

	const loadBirthdayRecords = async () => {
		birthdayRecords.value = await Promise.all(
			Object.entries(
				import.meta.glob<OwnerBirthdayRecord>('~/stores/owner/birthday/records/*/meta.*', {
					import: 'default'
				})
			).map(async ([path, importer]) => {
				const meta = await importer()

				Object.assign(meta, {
					age: path.split('/').at(-2) ?? '?'
				})

				return meta
			})
		)
	}

	return {
		name,
		avatar,
		notes,

		birthday: {
			date: birthdayDate,
			records: birthdayRecords
		},
		timeline: {
			notes: {
				title: timelineNotesTitle,
				items: timelineNotesItems
			}
		},

		contacts,
		portals,

		handlePoke,
		loadBirthdayRecords
	}
})