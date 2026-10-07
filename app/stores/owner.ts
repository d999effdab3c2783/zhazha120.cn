import { isNotNil } from 'es-toolkit'
import { defineStore } from 'pinia'

import { useApiStore } from '~/stores/api'
import contacts from '~/stores/owner/contacts'
import { avatar, name, poke, notes, birthday } from '~/stores/owner/information'
import portals from '~/stores/owner/portals'
import { title as timelineNotesTitle, items as timelineNotesItems } from '~/stores/owner/timeline/notes'

export const useOwnerStore = defineStore('owner', () => {
	const apiStore = useApiStore()

	const handlePoke = () => {
		if (isNotNil(apiStore.message)) {
			apiStore.message.create(poke)
		}
	}

	return {
		name,
		avatar,
		notes,

		birthday,
		timeline: {
			notes: {
				title: timelineNotesTitle,
				items: timelineNotesItems
			}
		},

		contacts,
		portals,

		handlePoke
	}
})