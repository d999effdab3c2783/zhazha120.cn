<script setup lang="ts">
	import { useResponsive } from '~/composables/responsive'
	import { useFriendsStore } from '~/stores/friends'

	const friendsStore = useFriendsStore()

	const { isMobile } = useResponsive()

	await friendsStore.loadWebsites()
</script>

<template>
	<n-flex
		size="small"
		:vertical="isMobile"
	>
		<template
			v-for="(item, index) in friendsStore.websites"
			:key="index"
		>
			<sections-friends-websites-item :item="item" />
		</template>
	</n-flex>
</template>