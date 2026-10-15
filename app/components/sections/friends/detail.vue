<script lang="ts" setup>
	import { isNotNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { useFriendsStore } from '~/stores/friends'

	const props = defineProps<{
		readonly slug: string
	}>()

	const friendsStore = useFriendsStore()

	const friend = computed(() => {
		return friendsStore.entries.find(item => {
			return item.slug === props.slug
		})
	})

	await friendsStore.loadEntries()
</script>

<template>
	<template v-if="isNotNil(friend)">
		<n-flex
			size="small"
			vertical
		>
			<sections-friends-item :item="friend" />
			<sections-friends-contacts :item="friend" />
			<sections-friends-game :item="friend" />
		</n-flex>
	</template>

	<template v-else>
		<n-card size="small">
			<n-empty />
		</n-card>
	</template>
</template>