import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

import type { Utility } from '~/types/utility'

export const useUtilityStore = defineStore('utility', () => {
	const registry = shallowRef<Utility[]>([])

	const load = async () => {
		registry.value = await Promise.all(
			Object.values(
				import.meta.env.DEV
					? import.meta.glob<Utility>(['~/stores/utilities/*/meta.*'], {
							import: 'default'
						})
					: import.meta.glob<Utility>(['~/stores/utilities/*/meta.*', '!~/stores/utilities/dev.*/meta*'], {
							import: 'default'
						})
			).map(async importer => {
				return await importer()
			})
		)
	}

	return {
		registry,

		load
	}
})