<script lang="ts" setup>
	import { useRouteParams } from '@vueuse/router'
	import { isNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { definePageMeta } from '#app/composables/pages'
	import { useFriendsStore } from '~/stores/friends'

	definePageMeta({
		layout: 'subpage',
		title: '舞萌 (maimai)'
	})

	const slug = useRouteParams('slug', null, {
		mode: 'push',
		transform: String
	})

	const friendsStore = useFriendsStore()

	const friend = computed(() => {
		return friendsStore.entries.find(item => {
			return item.slug === slug.value
		})
	})

	friendsStore.loadEntries()
</script>

<template>
	<template v-if="isNil(friend) || isNil(friend.diving_fish_maimai_username)">
		<n-card size="small">
			<n-empty />
		</n-card>
	</template>

	<template v-else>
		<sections-game-records-maimai-best50 :username="friend.diving_fish_maimai_username" />
	</template>
</template>