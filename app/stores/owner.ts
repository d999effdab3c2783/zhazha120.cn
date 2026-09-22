import { isNotNil } from 'es-toolkit'
import { defineStore } from 'pinia'

import avatar from '~/assets/images/owner/avatar.svg?url'
import { useApiStore } from '~/stores/api'

const name = '渣渣120'
const poke = '戳哭了 哄不好了'

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