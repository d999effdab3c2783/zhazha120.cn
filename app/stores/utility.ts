import type { Utility } from '~/types/utility'

import { once } from 'es-toolkit'
import { defineStore } from 'pinia'
import { shallowReactive } from 'vue'

export const useUtilityStore = defineStore('utility', () => {
	const registry = shallowReactive<Utility[]>([])

	const load = once(async () => {
		await Promise.all(
			Object.values(
				import.meta.env.DEV
					? import.meta.glob<Utility>(['~/stores/utilities/*/meta.*'], {
							import: 'default'
						})
					: import.meta.glob<Utility>(['~/stores/utilities/*/meta.*', '!~/stores/utilities/dev.*/meta*'], {
							import: 'default'
						})
			).map(async importer => {
				const imported = await importer()

				registry.push(imported)
			})
		)
	})

	return {
		load,

		registry
	}
})