<script lang="ts" setup>
import CustomNaiveHorizontalScroll from '@/components/custom/naive/horizontal-scroll.vue'
import { useDatabase } from '@/composables/database'
import type TetrioSprintTimeline from '@/database/tables/tetrio_sprint_timeline'
import { NCard, NTimeline, NTimelineItem } from 'naive-ui'
import { isEmptyish } from 'remeda'

defineOptions({
	name: 'SectionsGameTetrioSprintTimelines'
})

const items = useDatabase<TetrioSprintTimeline[]>(async database => {
	return database.tetrio_sprint_timelines.toArray()
})
</script>

<template>
	<template v-if="!isEmptyish(items)">
		<n-card size="small" title="Sprint / 40 行 / 40 Lines | 时间线">
			<custom-naive-horizontal-scroll>
				<n-timeline horizontal>
					<template v-for="item in items">
						<n-timeline-item :time="new Date(item.archived_at).toLocaleDateString()" :title="item.time.toString()" type="success"/>
					</template>
				</n-timeline>
			</custom-naive-horizontal-scroll>
		</n-card>
	</template>
</template>