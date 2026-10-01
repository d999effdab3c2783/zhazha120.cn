import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

import type { Utility } from '~/types/utility'

export const useUtilityStore = defineStore('utility', () => {
	const registry = shallowRef<Utility[]>([])

	const load = async () => {
		await Promise.all(
			Object.values(
				import.meta.glob<Utility>('~/stores/utilities/*/meta.*', {
					import: 'default'
				})
			).map(async importer => {
				registry.value.push(await importer())
			})
		)
	}

	return {
		registry,

		load
	}
})