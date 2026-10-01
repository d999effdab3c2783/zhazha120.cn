import { isNil } from 'es-toolkit'
import { defineStore } from 'pinia'
import { computed, shallowRef } from 'vue'

import bio from '~/stores/furry/bio'
import portals from '~/stores/furry/portals'
import type { FurryCharacter, FurryCharacterEntry, FurryEvent, FurryEventEntry } from '~/types/furry'
import { filterArray } from '~/utils/filter'

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

	const mappings = computed(() => {
		const temp = new WeakMap<
			FurryEventEntry | FurryCharacter,
			Partial<{
				readonly characters: FurryCharacterEntry[]
				readonly events: FurryEventEntry[]
			}>
		>()

		characters.value.forEach(item => {
			temp.set(item, {
				events: events.value.filter(eventItem => {
					if (isNil(eventItem.charactersQuery)) {
						return false
					}

					return (filterArray(characters.value, eventItem.charactersQuery) ?? []).includes(item)
				})
			})
		})

		events.value.forEach(item => {
			if (isNil(item.charactersQuery)) {
				return
			}

			temp.set(item, {
				characters: filterArray(characters.value, item.charactersQuery) ?? []
			})
		})

		return temp
	})

	return {
		bio,
		portals,

		characters,
		events,

		mappings,

		loadCharacters,
		loadEvents
	}
})