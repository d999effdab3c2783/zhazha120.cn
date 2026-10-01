<script setup lang="ts">
	import { clsx } from 'clsx'
	import { formatDistanceToNowStrict, isPast } from 'date-fns'
	import { zhCN } from 'date-fns/locale'
	import { computed } from 'vue'

	import type { FurryEventEntry } from '~/types/furry'

	const props = defineProps<{
		readonly item: FurryEventEntry
	}>()

	const startDate = computed(() => {
		return new Date(props.item.startDate)
	})

	const endDate = computed(() => {
		return new Date(props.item.endDate)
	})

	const started = computed(() => {
		return isPast(endDate.value)
	})

	const dateAgo = computed(() => {
		if (started.value) {
			return formatDistanceToNowStrict(endDate.value, {
				addSuffix: true,
				locale: zhCN,
				unit: 'day',
				roundingMethod: 'floor'
			})
		}

		return formatDistanceToNowStrict(startDate.value, {
			addSuffix: true,
			locale: zhCN,
			unit: 'day',
			roundingMethod: 'ceil'
		}).replaceAll('内', '后')
	})

	const dateTextClassNames = computed(() => {
		return clsx({
			'opacity-50': started.value
		})
	})
</script>

<template>
	<n-flex
		align="center"
		:size="0"
	>
		<n-icon class="i-ant-design:clock-circle-outlined text-5 mr-1" />

		<n-text :class="dateTextClassNames">
			{{ startDate.toLocaleDateString() }}
			~
			{{ endDate.toLocaleDateString() }}

			({{ dateAgo }})
		</n-text>
	</n-flex>
</template>