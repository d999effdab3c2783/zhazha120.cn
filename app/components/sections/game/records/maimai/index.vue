<script setup lang="ts">
	import { useGameStore } from '~/stores/game'

	const gameStore = useGameStore()
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<sections-game-records-maimai-best50 :username="gameStore.records.maimai.divinigFish.username" />
	</n-flex>
</template>