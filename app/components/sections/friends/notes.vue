<script setup lang="ts">
	import { useFriendsStore } from '~/stores/friends'

	const friendsStore = useFriendsStore()
</script>

<template>
	<n-card
		size="small"
		:title="friendsStore.notes.title"
	>
		<n-divider class="!mt-0" />
		<custom-render-texts :items="friendsStore.notes.items" />
	</n-card>
</template>