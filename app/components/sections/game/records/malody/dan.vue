<script lang="ts" setup>
	import { useGameStore } from '~/stores/game'

	const gameStore = useGameStore()
</script>

<template>
	<n-card size="small">
		<template #header>Dan ({{ gameStore.records.malody.dan.base }})</template>

		<n-flex
			align="center"
			justify="space-evenly"
			size="small"
		>
			<n-text class="text-sky-300">叠 (Jack): {{ gameStore.records.malody.dan.jack }}</n-text>
			<n-divider vertical />
			<n-text class="text-yellow-300">技/技巧 (Technical): {{ gameStore.records.malody.dan.tech }}</n-text>
			<n-divider vertical />
			<n-text class="text-red-300">乱/速度 (Speed): {{ gameStore.records.malody.dan.speed }}</n-text>
			<n-divider vertical />
			<n-text class="text-green-300">切 (Stream): {{ gameStore.records.malody.dan.stream }}</n-text>
		</n-flex>
	</n-card>
</template>