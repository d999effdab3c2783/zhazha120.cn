<script lang="ts" setup>
	import { useResponsive } from '~/composables/responsive'
	import { useFriendsStore } from '~/stores/friends'

	const friendsStore = useFriendsStore()

	const { isMobile } = useResponsive()

	await friendsStore.loadWebsites()
</script>

<template>
	<n-flex
		class="n-button__patch"
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

<style lang="scss">
	@use '~/styles/patches';
</style>