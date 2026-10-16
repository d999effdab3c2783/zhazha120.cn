import { defineStore } from 'pinia'
import { shallowReactive } from 'vue'

import { title as notesTitle, items as notesItems } from '~/stores/friends/notes'
import type { Friend, FriendEntry, FriendWebsite } from '~/types/friend'

export const useFriendsStore = defineStore('friends', () => {
	const websites = shallowReactive<FriendWebsite[]>([])
	const entries = shallowReactive<FriendEntry[]>([])

	const entriesGlob = import.meta.glob<Friend>('~/stores/friends/entries/*/meta.*', {
		import: 'default'
	})

	const loadEntries = async () => {
		if (entries.length > 0) {
			return
		}

		entries.splice(0, entries.length)

		await Promise.all(
			Object.entries(entriesGlob).map(async ([path, importer]) => {
				const meta = await importer()

				Object.assign(meta, {
					slug: path.split('/').at(-2) ?? '?'
				})

				entries.push(meta)
			})
		)
	}

	const websitesGlob = import.meta.glob<FriendWebsite>('~/stores/friends/websites/*/meta.*', {
		import: 'default'
	})

	const loadWebsites = async () => {
		if (websites.length > 0) {
			return
		}

		websites.splice(0, websites.length)

		await Promise.all(
			Object.values(websitesGlob).map(async importer => {
				const imported = await importer()

				websites.push(imported)
			})
		)
	}

	return {
		notes: {
			title: notesTitle,
			items: notesItems
		},

		entries,
		websites,

		entriesGlob,
		loadEntries,

		websitesGlob,
		loadWebsites
	}
})