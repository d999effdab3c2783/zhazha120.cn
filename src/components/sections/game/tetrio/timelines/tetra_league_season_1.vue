<script lang="ts" setup>
import CustomNaiveHorizontalScroll from '@/components/custom/naive/horizontal-scroll.vue'
import { useDatabase } from '@/composables/database'
import type TetrioTetraLeagueSeasonTimeline from '@/database/tables/tetrio_tetra_league_season_timeline'
import { computedAsync } from '@vueuse/core'
import { NCard, NImage, NPopover, NText, NTimeline, NTimelineItem } from 'naive-ui'
import { isEmptyish, isNullish } from 'remeda'

defineOptions({
	name: 'SectionsGameTetrioTetraLeagueSeason1Timeline'
})

const items = useDatabase<TetrioTetraLeagueSeasonTimeline[]>(async database => {
	return database.tetrio_tetra_league_season_1_timelines.toArray()
})

const mappedItems = computedAsync(async () => {
	if ( isNullish(items.value) ) {
		return
	}

	return await Promise.all(
		items.value.map(async item => {
			return {
				...item,

				color: useDatabase<string>(async database => {
					const mapping = await database.tetrio_rank_color_mappings
						.where('name').equalsIgnoreCase(item.rank)
						.first()

					if ( isNullish(mapping) ) {
						return
					}

					return mapping.value
				})
			}
		})
	)
}, [])
</script>

<template>
	<template v-if="!isEmptyish(items) && !isEmptyish(mappedItems)">
		<n-card size="small" title="排位赛 / Tetra League | 第 1 赛季 / Season 1 - 段位 | 时间线">
			<custom-naive-horizontal-scroll>
				<n-timeline horizontal>
					<template v-for="item in mappedItems">
						<n-timeline-item :time="new Date(item.archived_at).toLocaleDateString()" type="info">
							<template #header>
								<n-popover>
									<template #trigger>
										<n-image :img-props="{ class: 'w-6' }" :src="(`https://tetr.io/res/league-ranks/${item.rank}.png`)"/>
									</template>

									<n-text :style="{ color: item.color.value }" class="fw-bold">{{ item.rank.toUpperCase() }}</n-text>
								</n-popover>
							</template>
						</n-timeline-item>
					</template>
				</n-timeline>
			</custom-naive-horizontal-scroll>
		</n-card>
	</template>
</template>