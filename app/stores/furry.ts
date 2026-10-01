import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

import bio from '~/stores/furry/bio'
import portals from '~/stores/furry/portals'
import type { FurryCharacter, FurryCharacterEntry, FurryEvent, FurryEventEntry } from '~/types/furry'

export const useFurryStore = defineStore('furry', () => {
	const characters = shallowRef<FurryCharacterEntry[]>([])
	const events = shallowRef<FurryEventEntry[]>([])

	const loadCharacters = async () => {
		characters.value = await Promise.all(
			Object.entries(
				import.meta.glob<FurryCharacter>('~/stores/furry/characters/*/meta.*', {
					import: 'default'
				})
			).map(async ([path, importer]) => {
				const meta = await importer()

				Object.assign(meta, {
					slug: path.split('/').at(-2) ?? '?'
				})

				return meta
			})
		)
	}

	const loadEvents = async () => {
		events.value = await Promise.all(
			Object.entries(
				import.meta.glob<FurryEvent>('~/stores/furry/events/*/*/meta.*', {
					import: 'default'
				})
			).map(async ([path, importer]) => {
				const meta = await importer()

				Object.assign(meta, {
					year: Number(path.split('/').at(-3) ?? -1),
					slug: path.split('/').at(-2) ?? '?'
				})

				return meta satisfies FurryEventEntry
			})
		)
	}

	return {
		bio,
		portals,

		characters,
		events,

		loadCharacters,
		loadEvents
	}
})