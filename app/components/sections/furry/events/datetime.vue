<script setup lang="ts">
	import { useNow } from '@vueuse/core'
	import { clsx } from 'clsx'
	import { formatDistanceStrict, isFuture, isPast } from 'date-fns'
	import { zhCN } from 'date-fns/locale'
	import { computed } from 'vue'

	import type { FurryEventEntry } from '~/types/furry'

	const props = defineProps<{
		readonly item: FurryEventEntry
	}>()

	const now = useNow()

	const startDate = computed(() => {
		return new Date(props.item.startDate)
	})

	const endDate = computed(() => {
		return new Date(props.item.endDate)
	})

	const started = computed(() => {
		return isPast(startDate.value) && isFuture(endDate.value)
	})

	const finished = computed(() => {
		return isPast(endDate.value)
	})

	const dateAgo = computed(() => {
		if (started.value) {
			const ago = formatDistanceStrict(endDate.value, now.value, {
				addSuffix: true,
				locale: zhCN,
				unit: 'day',
				roundingMethod: 'ceil'
			})

			return `进行中, ${ago}结束`
		}

		if (finished.value) {
			return formatDistanceStrict(startDate.value, now.value, {
				addSuffix: true,
				locale: zhCN,
				unit: 'day',
				roundingMethod: 'floor'
			})
		}

		return formatDistanceStrict(startDate.value, now.value, {
			addSuffix: true,
			locale: zhCN,
			unit: 'day',
			roundingMethod: 'ceil'
		})
	})

	const dateTextClassNames = computed(() => {
		return clsx({
			'opacity-50': finished.value
		})
	})
</script>

<template>
	<n-flex
		align="center"
		:size="0"
	>
		<n-icon class="i-ant-design:clock-circle-outlined text-5 mr-1" />

		<n-text
			:class="dateTextClassNames"
			:type="started ? 'primary' : undefined"
		>
			{{ startDate.toLocaleDateString() }}
			~
			{{ endDate.toLocaleDateString() }}

			({{ dateAgo.replaceAll('内', '后') }})
		</n-text>
	</n-flex>
</template>