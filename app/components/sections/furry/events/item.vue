<script setup lang="ts">
	import { clsx } from 'clsx'
	import { isPast, formatDistanceToNowStrict } from 'date-fns'
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
	<n-card size="small">
		<template #cover>
			<n-image :src="item.banner" />
		</template>

		<n-flex
			class="leading-snug"
			:size="0"
			vertical
		>
			<n-flex
				align="center"
				justify="space-between"
				:size="0"
			>
				<n-flex
					align="center"
					:size="0"
				>
					<n-text class="text-[1.2em]">{{ item.name }}</n-text>
					<n-divider vertical />
					<n-text type="info">{{ item.theme }}</n-text>
				</n-flex>

				<n-text :depth="3">{{ item.slug }}</n-text>
			</n-flex>

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

			<slot name="extra" />
		</n-flex>
	</n-card>
</template>