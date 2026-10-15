import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

import { title as notesTitle, items as notesItems } from '~/stores/friends/notes'
import type { Friend, FriendEntry, FriendWebsite } from '~/types/friend'

export const useFriendsStore = defineStore('friends', () => {
	const websites = shallowRef<FriendWebsite[]>([])
	const entries = shallowRef<FriendEntry[]>([])

	const entriesGlob = import.meta.glob<Friend>('~/stores/friends/entries/*/meta.*', {
		import: 'default'
	})

	const loadEntries = async () => {
		entries.value = await Promise.all(
			Object.entries(entriesGlob).map(async ([path, importer]) => {
				const meta = await importer()

				Object.assign(meta, {
					slug: path.split('/').at(-2) ?? '?'
				})

				return meta
			})
		)
	}

	const websitesGlob = import.meta.glob<FriendWebsite>('~/stores/friends/websites/*/meta.*', {
		import: 'default'
	})

	const loadWebsites = async () => {
		websites.value = await Promise.all(
			Object.values(websitesGlob).map(async importer => {
				return await importer()
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