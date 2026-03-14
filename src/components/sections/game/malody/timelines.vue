<script lang="ts" setup>
import CustomNaiveHorizontalScroll from '@/components/custom/naive/horizontal-scroll.vue'
import CustomRedirect from '@/components/custom/redirect.vue'
import { useDatabase } from '@/composables/database'
import type MalodyV3DanTimeline from '@/database/tables/malody_v3_dan_timeline'
import { NCard, NText, NTimeline, NTimelineItem } from 'naive-ui'
import { isEmptyish } from 'remeda'

defineOptions({
	name: 'SectionsGameMalodyTimelines'
})

const items = useDatabase<MalodyV3DanTimeline[]>(async database => {
	return database.malody_v3_dan_timelines.toArray()
})

const guessType = (name: string) => {
	if ( name.includes('后光') ) {
		return 'error'
	}

	if ( name.includes('Extra') ) {
		return 'warning'
	}

	return 'success'
}
</script>

<template>
	<template v-if="!isEmptyish(items)">
		<n-card size="small" title="4 Key V3 段位 | 时间线">
			<custom-naive-horizontal-scroll>
				<n-timeline horizontal>
					<template v-for="item in items">
						<n-timeline-item :type="guessType(item.name)">

							<custom-redirect :href="item.video_url">
								<n-text type="primary">{{ item.name }}</n-text>
							</custom-redirect>
						</n-timeline-item>
					</template>
				</n-timeline>
			</custom-naive-horizontal-scroll>
		</n-card>
	</template>
</template>