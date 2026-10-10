<script lang="ts" setup>
	import { useGameStore } from '~/stores/game'

	const gameStore = useGameStore()
</script>

<template>
	<iframe
		class="border-none h-240"
		:src="gameStore.records.geometryDash.overlay"
	/>
</template>