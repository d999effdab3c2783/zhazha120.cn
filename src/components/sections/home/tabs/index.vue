<script lang="ts" setup>
import SectionsHomeTabsDev from '@/components/sections/home/tabs/dev.vue'
import SectionsHomeTabsFurry from '@/components/sections/home/tabs/furry.vue'
import SectionsHomeTabsSelf from '@/components/sections/home/tabs/self/index.vue'
import { useHasRegistry } from '@/composables/database'
import type { MotionVariants } from '@vueuse/motion'
import { useRouteQuery } from '@vueuse/router'
import { NElement, NTabPane, NTabs } from 'naive-ui'

defineOptions({
	name: 'SectionsHomeTabs'
})

const tab = useRouteQuery('tab', 'self')

const motions = {
	container: {
		initial: {
			opacity: 0
		},
		visible: {
			opacity: 1,

			transition: {
				type: 'spring',
				duration: 500
			}
		}
	} satisfies MotionVariants<string>
} as const

const show_self = useHasRegistry('self.*')
const show_dev = useHasRegistry('dev.*')
const show_furry = useHasRegistry('furry.*')
</script>

<template>
	<template v-if="show_self || show_dev || show_furry">
		<n-element v-motion="motions.container">
			<n-tabs v-model:value="tab" animated tab-class="cursor-target" type="segment">
				<template v-if="show_self">
					<n-tab-pane name="self" tab="本体">
						<sections-home-tabs-self/>
					</n-tab-pane>
				</template>

				<template v-if="show_dev">
					<n-tab-pane name="dev" tab="开发">
						<sections-home-tabs-dev/>
					</n-tab-pane>
				</template>

				<template v-if="show_furry">
					<n-tab-pane name="furry" tab="福瑞">
						<sections-home-tabs-furry/>
					</n-tab-pane>
				</template>
			</n-tabs>
		</n-element>
	</template>
</template>