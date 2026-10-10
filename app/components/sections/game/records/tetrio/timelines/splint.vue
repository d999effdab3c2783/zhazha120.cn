<script lang="ts" setup>
	import { useResponsive } from '~/composables/responsive'
	import { useGameStore } from '~/stores/game'

	const gameStore = useGameStore()

	const { isMobile } = useResponsive()
</script>

<template>
	<n-card
		size="small"
		title="40 行 / 40L / Sprint / 40 Lines | 时间线"
	>
		<n-scrollbar
			class="overscroll-contain"
			data-lenis-prevent-horizontal
			x-scrollable
		>
			<n-timeline :horizontal="!isMobile">
				<template
					v-for="({ time, archived_at }, index) in gameStore.records.tetrio.splintTimelines"
					:key="index"
				>
					<n-timeline-item
						:time="archived_at.toLocaleDateString()"
						type="success"
					>
						{{ time }}
					</n-timeline-item>
				</template>
			</n-timeline>
		</n-scrollbar>
	</n-card>
</template>