<script lang="ts" setup>
import CustomNaiveHorizontalScroll from '@/components/custom/naive/horizontal-scroll.vue'
import { useDatabase } from '@/composables/database'
import type TetrioBlitzTimeline from '@/database/tables/tetrio_blitz_timeline'
import { NCard, NTimeline, NTimelineItem } from 'naive-ui'
import { isEmptyish } from 'remeda'

defineOptions({
	name: 'SectionsGameTetrioBlitzTimelines'
})

const items = useDatabase<TetrioBlitzTimeline[]>(async database => {
	return database.tetrio_blitz_timelines.toArray()
})
</script>

<template>
	<template v-if="!isEmptyish(items)">
		<n-card size="small" title="闪电战 / Blitz | 时间线">
			<custom-naive-horizontal-scroll>
				<n-timeline horizontal>
					<template v-for="item in items">
						<n-timeline-item :time="new Date(item.archived_at).toLocaleDateString()" :title="item.score.toString()" type="warning"/>
					</template>
				</n-timeline>
			</custom-naive-horizontal-scroll>
		</n-card>
	</template>
</template>