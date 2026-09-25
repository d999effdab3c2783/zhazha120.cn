import { isNotNil } from 'es-toolkit'
import { defineStore } from 'pinia'

import avatar from '~/assets/images/owner/avatar.svg?url'
import { useApiStore } from '~/stores/api'
import { name, poke } from '~/stores/owner/information'

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

		handlePoke
	}
})