import type { FurryCharacter, FurryCharacterEntry, FurryEvent, FurryEventEntry } from '~/types/furry'

import { isNil, once } from 'es-toolkit'
import { defineStore } from 'pinia'
import { computed, shallowReactive } from 'vue'

import { items as notesItems, title as notesTitle } from '~/stores/furry/notes'
import portals from '~/stores/furry/portals'
import { filterArray } from '~/utils/filter'

export const useFurryStore = defineStore('furry', () => {
	const characters = shallowReactive<FurryCharacterEntry[]>([])
	const events = shallowReactive<FurryEventEntry[]>([])

	const charactersGlob = import.meta.glob<FurryCharacter>('~/stores/furry/characters/*/meta.*', {
		import: 'default'
	})

	const loadCharacters = once(async () => {
		await Promise.all(
			Object.entries(charactersGlob).map(async ([path, importer]) => {
				const meta = await importer()

				Object.assign(meta, {
					slug: path.split('/').at(-2) ?? '?'
				})

				characters.push(meta)
			})
		)
	})

	const eventsGlob = import.meta.glob<FurryEvent>('~/stores/furry/events/*/*/meta.*', {
		import: 'default'
	})

	const loadEvents = once(async () => {
		await Promise.all(
			Object.entries(eventsGlob).map(async ([path, importer]) => {
				const meta = await importer()

				Object.assign(meta, {
					slug: path.split('/').at(-2) ?? '?',
					year: Number(path.split('/').at(-3) ?? -1)
				})

				events.push(meta satisfies FurryEventEntry)
			})
		)
	})

	const mappings = computed(() => {
		const temp = new WeakMap<
			FurryEventEntry | FurryCharacter,
			Partial<{
				readonly characters: FurryCharacterEntry[]
				readonly events: FurryEventEntry[]
			}>
		>()

		characters.forEach(item => {
			temp.set(item, {
				events: events.filter(eventItem => {
					if (isNil(eventItem.charactersQuery)) {
						return false
					}

					return (filterArray(characters, eventItem.charactersQuery) ?? []).includes(item)
				})
			})
		})

		events.forEach(item => {
			if (isNil(item.charactersQuery)) {
				return
			}

			temp.set(item, {
				characters: filterArray(characters, item.charactersQuery) ?? []
			})
		})

		return temp
	})

	return {
		characters,

		charactersGlob,

		events,

		eventsGlob,

		loadCharacters,

		loadEvents,

		mappings,

		notes: {
			items: notesItems,
			title: notesTitle
		},

		portals
	}
})