<script lang="ts" setup>
	import { useGameStore } from '~/stores/game'

	const gameStore = useGameStore()
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<n-card
			size="small"
			title="mania 4K"
		>
			<n-flex
				align="center"
				justify="space-evenly"
				size="small"
			>
				<n-text class="text-sky-300">叠 (Jack): {{ gameStore.records.osu.mania['4k'].dan.jack }}</n-text>
				<n-divider vertical />

				<n-text class="text-yellow-300">
					技/技巧 (Technical): {{ gameStore.records.osu.mania['4k'].dan.tech }}
				</n-text>

				<n-divider vertical />

				<n-text class="text-red-300">乱/速度 (Speed): {{ gameStore.records.osu.mania['4k'].dan.speed }}</n-text>
				<n-divider vertical />

				<n-text class="text-green-300">
					切/耐力 (Stream/Stamina): {{ gameStore.records.osu.mania['4k'].dan.stamina }}
				</n-text>

				<n-divider vertical />
				<n-text class="text-purple-300">
					长条/面 (Long Note): {{ gameStore.records.osu.mania['4k'].dan.long_note }}
				</n-text>
			</n-flex>
		</n-card>
	</n-flex>
</template>