<script setup lang="ts">
	import { useFriendsStore } from '~/stores/friends'

	const friendsStore = useFriendsStore()
</script>

<template>
	<n-card
		size="small"
		title="回忆"
	>
		<n-divider class="!mt-0" />
		<custom-render-texts :items="friendsStore.bio" />
	</n-card>
</template>