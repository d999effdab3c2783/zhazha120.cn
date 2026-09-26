<script setup lang="ts">
	import { isNil, isPlainObject, pick } from 'es-toolkit'

	import type { RenderableText } from '~/types/render'

	defineProps<{
		readonly items: RenderableText[]
	}>()
</script>

<template>
	<n-flex
		:size="0"
		vertical
	>
		<template
			v-for="(item, index) in items"
			:key="index"
		>
			<template v-if="isNil(item)">
				<n-text class="select-none">&nbsp;</n-text>
			</template>

			<template v-else>
				<n-text v-bind="isPlainObject(item) ? pick(item, ['type', 'depth', 'class']) : {}">
					{{ isPlainObject(item) ? item.text : item }}
				</n-text>
			</template>
		</template>
	</n-flex>
</template>