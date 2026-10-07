import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

import { id as musicId } from '~/stores/owner/birthday/records/20/stores/data/music'
import renderables from '~/stores/owner/birthday/records/20/stores/data/renderables'
import type { OwnerBirthdayCongratulation } from '~/types/owner'

export const useOwnerBirthdayRecords20DataStore = defineStore('owner.birthday.records.20.data', () => {
	const congratulations = shallowRef<OwnerBirthdayCongratulation[]>([])

	const loadCongratulations = async () => {
		congratulations.value = await Promise.all(
			Object.values(
				import.meta.glob<string>('~/stores/owner/birthday/records/20/stores/congratulations/*.bin', {
					query: '?url',
					import: 'default'
				})
			).map(async importer => {
				return {
					src: await importer()
				} as const satisfies OwnerBirthdayCongratulation
			})
		)
	}

	return {
		music: {
			id: musicId
		},

		congratulations,
		renderables,

		loadCongratulations
	}
})