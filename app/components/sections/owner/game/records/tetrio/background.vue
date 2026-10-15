<script lang="ts" setup>
	import { useGameStore } from '~/stores/game'

	const gameStore = useGameStore()
</script>

<template>
	<n-card
		size="small"
		title="背景"
	>
		<n-element class="utils__center--flex">
			<n-image
				class="[&>img]:h-full"
				:src="gameStore.records.tetrio.backgroundOverlay"
			/>
		</n-element>
	</n-card>
</template>

<style lang="scss" scoped>
	@use '~/styles/utils';
</style>