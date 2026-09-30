<script lang="ts">
	import type { FurryEventEntry } from '~/types/furry'

	export type Indexes = {
		[year: string]: {
			[month: string]: {
				[date: string]: FurryEventEntry[]
			}
		}
	}

	export type CalendarDate = {
		readonly year: number
		readonly month: number
		readonly date: number
	}
</script>

<script setup lang="ts">
	import { eachDayOfInterval } from 'date-fns'
	import { groupBy, isNil, sortKeys } from 'es-toolkit'
	import { defaultTo, get } from 'es-toolkit/compat'
	import { computed } from 'vue'

	import { useArrayFilter } from '~/composables/filter'
	import { useFurryStore } from '~/stores/furry'

	const props = withDefaults(
		defineProps<
			Partial<{
				readonly defaultFilter: (item: FurryEventEntry) => boolean
			}>
		>(),
		{
			defaultFilter: () => () => true
		}
	)

	const furryStore = useFurryStore()

	const filter = useArrayFilter(furryStore.events)

	const events = computed(() => {
		return filter.output.value.filter(props.defaultFilter)
	})

	const groupedEvents = computed(() => {
		return sortKeys(
			groupBy(events.value, item => {
				if (isNil(item.year)) {
					return 0
				}

				return item.year
			}),
			(a, b) => {
				return Number(b) - Number(a)
			}
		)
	})

	const indexes = computed(() => {
		const result: Indexes = {}

		for (const event of events.value) {
			const days = eachDayOfInterval({
				start: new Date(event.startDate),
				end: new Date(event.endDate)
			})

			for (const day of days) {
				const currentYear = day.getFullYear()
				const currentMonth = day.getMonth() + 1
				const currentDay = day.getDate()

				if (isNil(result[currentYear])) {
					result[currentYear] = {}
				}

				if (isNil(result[currentYear][currentMonth])) {
					result[currentYear][currentMonth] = {}
				}

				if (isNil(result[currentYear][currentMonth][currentDay])) {
					result[currentYear][currentMonth][currentDay] = []
				}

				result[currentYear][currentMonth][currentDay].push(event)
			}
		}

		return result
	})

	const filterEvents = (date: CalendarDate): FurryEventEntry[] => {
		return defaultTo(get(indexes.value, [date.year, date.month, date.date]), []) ?? []
	}

	const handleCalendarUpdate = (_timestamp: number, date: CalendarDate) => {
		filter.query.value = filterEvents(date)
			.map(item => {
				return `(slug = "${item.slug}" AND year = "${item.year}")`
			})
			.join(' OR ')
	}

	await furryStore.loadEvents()
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<n-card
			size="small"
			title="过滤"
		>
			<custom-shared-filter-input :filter="filter" />
		</n-card>

		<n-card size="small">
			<n-calendar @update:value="handleCalendarUpdate">
				<template #default="{ year, month, date }">
					<n-flex
						class="mt-2"
						size="small"
						vertical
					>
						<template
							v-for="({ name }, index) in filterEvents({
								year,
								month,
								date
							})"
							:key="index"
						>
							<n-text type="primary">{{ name }}</n-text>
						</template>
					</n-flex>
				</template>
			</n-calendar>
		</n-card>

		<template
			v-for="(items, year) in groupedEvents"
			:key="year"
		>
			<n-divider>{{ year }}</n-divider>

			<template
				v-for="(item, index) in items"
				:key="index"
			>
				<sections-furry-events-item :item="item">
					<template #extra>
						<sections-furry-events-buttons :item="item" />
					</template>
				</sections-furry-events-item>
			</template>
		</template>
	</n-flex>
</template>

<style lang="scss">
	@use '~/styles/transitions/fade';
</style>