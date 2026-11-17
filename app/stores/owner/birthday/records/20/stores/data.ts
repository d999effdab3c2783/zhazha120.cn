import type { OwnerBirthdayCongratulation } from '~/types/owner'

import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

import { id as musicId } from '~/stores/owner/birthday/records/20/stores/data/music'
import renderables from '~/stores/owner/birthday/records/20/stores/data/renderables'

export const useOwnerBirthdayRecords20DataStore = defineStore('owner.birthday.records.20.data', () => {
	const congratulations = shallowRef<OwnerBirthdayCongratulation[]>([])

	const loadCongratulations = async () => {
		congratulations.value = await Promise.all(
			Object.values(
				import.meta.glob<string>('~/stores/owner/birthday/records/20/stores/congratulations/*.bin', {
					import: 'default',
					query: '?url'
				})
			).map(async importer => {
				return {
					src: await importer()
				} as const satisfies OwnerBirthdayCongratulation
			})
		)
	}

	return {
		congratulations,

		loadCongratulations,

		music: {
			id: musicId
		},

		renderables
	}
})