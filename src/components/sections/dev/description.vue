<script lang="ts" setup>
import CustomMarkdown from '@/components/custom/markdown/index.vue'
import CustomNaiveHorizontalScroll from '@/components/custom/naive/horizontal-scroll.vue'
import { useZodRegistry } from '@/composables/database'
import { isMobile } from '@/shared/responsive'
import { NCard } from 'naive-ui'
import { isEmptyish } from 'remeda'
import { z } from 'zod'

defineOptions({
	name: 'SectionsDevDescription'
})

const {
	0: description
} = useZodRegistry(
	z.object({
		'dev.description:0': z.string()
	})
)
</script>

<template>
	<template v-if="!isEmptyish(description)">
		<custom-naive-horizontal-scroll>
			<n-card :class="{ 'text-center': isMobile }" size="small">
				<custom-markdown :raw="description"/>
			</n-card>
		</custom-naive-horizontal-scroll>
	</template>
</template>