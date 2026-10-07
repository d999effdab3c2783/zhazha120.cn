<script setup lang="ts">
	import { useFriendsStore } from '~/stores/friends'

	const friendsStore = useFriendsStore()

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

		<slot name="websites">
			<n-divider>友情链接</n-divider>

			<n-card size="small">
				<sections-friends-websites :items="friendsStore.websites" />
			</n-card>
		</slot>
	</n-flex>
</template>