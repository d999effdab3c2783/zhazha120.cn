import { isNotNil } from 'es-toolkit'
import { defineStore } from 'pinia'

import { useApiStore } from '~/stores/api'
import contacts from '~/stores/owner/contacts'
import { avatar, name, poke, bio } from '~/stores/owner/information'
import portals from '~/stores/owner/portals'

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
		bio,

		contacts,
		portals,

		handlePoke
	}
})