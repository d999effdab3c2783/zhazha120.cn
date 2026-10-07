import { defineStore } from 'pinia'
import { shallowRef } from 'vue'

import { title as notesTitle, items as notesItems } from '~/stores/friends/notes'
import type { FriendWebsite } from '~/types/friend'

export const useFriendsStore = defineStore('friends', () => {
	const websites = shallowRef<FriendWebsite[]>([])

	const loadWebsites = async () => {
		websites.value = await Promise.all(
			Object.values(
				import.meta.glob<FriendWebsite>('~/stores/friends/websites/*/meta.*', {
					import: 'default'
				})
			).map(async importer => {
				return await importer()
			})
		)
	}

	return {
		notes: {
			title: notesTitle,
			items: notesItems
		},

		websites,

		loadWebsites
	}
})