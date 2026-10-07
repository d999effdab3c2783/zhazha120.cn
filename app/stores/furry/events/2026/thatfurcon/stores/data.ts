import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

import { id as qzoneId } from '~/stores/furry/events/2026/thatfurcon/stores/qzone/information'
import type { FurryEventPhoto } from '~/types/furry'

export const useFurryEventsThatfurcon2026DataStore = defineStore('furry.events.thatfurcon.2026.data', () => {
	const photos = shallowRef<FurryEventPhoto[]>([])

	const loadPhotos = async () => {
		photos.value = await Promise.all(
			Object.values(
				import.meta.glob<string>('~/stores/furry/events/2026/thatfurcon/stores/photos/*.bin', {
					query: '?url',
					import: 'default'
				})
			).map(async importer => {
				return {
					src: await importer()
				} as const satisfies FurryEventPhoto
			})
		)
	}

	return {
		photos,

		qzone: {
			id: qzoneId
		},

		loadPhotos
	}
})