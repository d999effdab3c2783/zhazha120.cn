<script lang="ts" setup>
	import { isNil } from 'es-toolkit'

	import { useResponsive } from '~/composables/responsive'
	import { useGameStore } from '~/stores/game'

	const gameStore = useGameStore()

	const { isMobile } = useResponsive()

	const guessColor = (rank: string) => {
		const color = gameStore.records.tetrio.rankColors.find(item => {
			return item.name === rank
		})

		if (isNil(color)) {
			return
		}

		return color.value
	}
</script>

<template>
	<n-card
		size="small"
		title="排位赛 / Tetra League | 第 2 赛季 / Season 2 - 段位 | 时间线"
	>
		<n-scrollbar
			class="overscroll-contain"
			data-lenis-prevent-horizontal
			x-scrollable
		>
			<n-timeline :horizontal="!isMobile">
				<template
					v-for="({ rank, archived_at }, index) in gameStore.records.tetrio.tetraLeagueSeason2Timelines"
					:key="index"
				>
					<n-timeline-item
						:time="archived_at.toLocaleDateString()"
						type="info"
					>
						<n-popover>
							<template #trigger>
								<n-image
									:img-props="{ class: 'w-6' }"
									:src="`https://tetr.io/res/league-ranks/${rank}.png`"
								/>
							</template>

							<n-text :style="{ color: guessColor(rank) }">
								{{ rank.toUpperCase() }}
							</n-text>
						</n-popover>
					</n-timeline-item>
				</template>
			</n-timeline>
		</n-scrollbar>
	</n-card>
</template>