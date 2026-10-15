<script setup lang="ts">
	import { useFriendsStore } from '~/stores/friends'

	const friendsStore = useFriendsStore()

	await friendsStore.loadEntries()
	await friendsStore.loadWebsites()
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<slot name="notes">
			<sections-friends-notes />
		</slot>

		<slot name="entries">
			<n-divider>入驻</n-divider>

			<sections-friends-list :items="friendsStore.entries" />
		</slot>

		<slot name="websites">
			<n-divider>友情链接</n-divider>

			<sections-friends-websites :items="friendsStore.websites" />
		</slot>
	</n-flex>
</template>