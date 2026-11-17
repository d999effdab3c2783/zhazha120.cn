import type { OwnerBirthdayRecord, OwnerBirthdayRecordEntry } from '~/types/owner'

import { isNotNil, once } from 'es-toolkit'
import { defineStore } from 'pinia'
import { shallowReactive } from 'vue'

import { useApiStore } from '~/stores/api'
import contacts from '~/stores/owner/contacts'
import { avatar, birthday as birthdayDate, name, notes, poke } from '~/stores/owner/information'
import portals from '~/stores/owner/portals'
import { items as timelineNotesItems, title as timelineNotesTitle } from '~/stores/owner/timeline/notes'

export const useOwnerStore = defineStore('owner', () => {
	const apiStore = useApiStore()

	const birthdayRecords = shallowReactive<OwnerBirthdayRecordEntry[]>([])

	const handlePoke = () => {
		if (isNotNil(apiStore.message)) {
			apiStore.message.create(poke)
		}
	}

	const loadBirthdayRecords = once(async () => {
		await Promise.all(
			Object.entries(
				import.meta.glob<OwnerBirthdayRecord>('~/stores/owner/birthday/records/*/meta.*', {
					import: 'default'
				})
			).map(async ([path, importer]) => {
				const meta = await importer()

				Object.assign(meta, {
					age: path.split('/').at(-2) ?? '?'
				})

				birthdayRecords.push(meta)
			})
		)
	})

	return {
		avatar,
		birthday: {
			date: birthdayDate,
			records: birthdayRecords
		},
		contacts,
		handlePoke,
		loadBirthdayRecords,
		name,
		notes,
		portals,
		timeline: {
			notes: {
				items: timelineNotesItems,
				title: timelineNotesTitle
			}
		}
	}
})