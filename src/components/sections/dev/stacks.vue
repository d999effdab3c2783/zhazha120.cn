<script lang="ts" setup>
import CustomNaiveAutoStack from '@/components/custom/naive/auto-stack.vue'
import CustomNaivePosition from '@/components/custom/naive/position.vue'
import CustomRedirect from '@/components/custom/redirect.vue'
import { useDatabase } from '@/composables/database'
import type DevStack from '@/database/tables/dev_stack'
import { isMobile } from '@/shared/responsive'
import { NCard, NIcon } from 'naive-ui'
import { groupBy, isEmptyish, prop } from 'remeda'

defineOptions({
	name: 'SectionsDevStacks'
})

const items = useDatabase<DevStack[]>(async database => {
	return database.dev_stacks.toArray()
})
</script>

<template>
	<template v-if="!isEmptyish(items)">
		<custom-naive-auto-stack>
			<template v-for="(sub_items, name) in groupBy( items, prop('type') )">
				<n-card :title="name" class="flex-1" size="small">
					<custom-naive-position :placement="(isMobile ? 'center' : 'center-left')" :wrap="isMobile">
						<template v-for="item in sub_items">
							<custom-redirect :href="item.href">
								<n-icon :class="item.icon" class="size-8"/>
							</custom-redirect>
						</template>
					</custom-naive-position>
				</n-card>
			</template>
		</custom-naive-auto-stack>
	</template>
</template>