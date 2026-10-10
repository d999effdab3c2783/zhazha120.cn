<script lang="ts" setup>
	import { useGameStore } from '~/stores/game'

	const gameStore = useGameStore()
</script>

<template>
	<n-image
		class="[&>img]:w-full"
		:src="gameStore.records.osu.overlay"
	/>
</template>