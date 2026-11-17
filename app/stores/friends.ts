import type { Friend, FriendEntry, FriendWebsite } from '~/types/friend'

import { once } from 'es-toolkit'
import { defineStore } from 'pinia'
import { shallowReactive } from 'vue'

import { items as notesItems, title as notesTitle } from '~/stores/friends/notes'

export const useFriendsStore = defineStore('friends', () => {
	const websites = shallowReactive<FriendWebsite[]>([])
	const entries = shallowReactive<FriendEntry[]>([])

	const entriesGlob = import.meta.glob<Friend>('~/stores/friends/entries/*/meta.*', {
		import: 'default'
	})

	const loadEntries = once(async () => {
		await Promise.all(
			Object.entries(entriesGlob).map(async ([path, importer]) => {
				const meta = await importer()

				Object.assign(meta, {
					slug: path.split('/').at(-2) ?? '?'
				})

				entries.push(meta)
			})
		)
	})

	const websitesGlob = import.meta.glob<FriendWebsite>('~/stores/friends/websites/*/meta.*', {
		import: 'default'
	})

	const loadWebsites = once(async () => {
		await Promise.all(
			Object.values(websitesGlob).map(async importer => {
				const imported = await importer()

				websites.push(imported)
			})
		)
	})

	return {
		entries,

		entriesGlob,

		loadEntries,

		loadWebsites,

		notes: {
			items: notesItems,
			title: notesTitle
		},

		websites,

		websitesGlob
	}
})