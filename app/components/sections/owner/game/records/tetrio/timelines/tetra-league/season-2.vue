<script lang="ts" setup>
	import { isNil } from 'es-toolkit'
	import { get } from 'es-toolkit/compat'

	import { useResponsive } from '~/composables/responsive'
	import { useGameStore } from '~/stores/game'
	import { filterArray } from '~/utils/filter'

	const gameStore = useGameStore()

	const { isMobile } = useResponsive()

	const guessColor = (rank: string) => {
		const filtered = filterArray(gameStore.records.tetrio.rankColors, `name : ["${rank}"]`)

		if (isNil(filtered) || filtered.length !== 1 || isNil(filtered[0])) {
			return undefined
		}

		return get(filtered[0], 'value')
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