<script lang="ts" setup>
	import { useResponsive } from '~/composables/responsive'
	import { useFriendsStore } from '~/stores/friends'

	const friendsStore = useFriendsStore()

	const { isMobile } = useResponsive()

	await friendsStore.loadWebsites()
</script>

<template>
	<n-grid
		class="!gap-2"
		:cols="isMobile ? 1 : 2"
	>
		<template
			v-for="(item, index) in friendsStore.websites"
			:key="index"
		>
			<n-grid-item>
				<sections-friends-websites-item :item="item" />
			</n-grid-item>
		</template>
	</n-grid>
</template>

<style lang="scss">
	@use '~/styles/patches';
</style>