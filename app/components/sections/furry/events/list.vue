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
	import { get, set } from 'es-toolkit/compat'
	import { computed } from 'vue'

	import { useArrayFilter } from '~/composables/filter'

	const props = defineProps<{
		readonly items: FurryEventEntry[]
	}>()

	const filter = useArrayFilter(props.items)

	const filteredItems = computed(() => {
		return filter.output.value
	})

	const filteredGroupedItems = computed(() => {
		return sortKeys(
			groupBy(filteredItems.value, item => {
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
		const temp: Indexes = {}

		for (const event of filteredItems.value) {
			const days = eachDayOfInterval({
				start: new Date(event.startDate),
				end: new Date(event.endDate)
			})

			for (const day of days) {
				const currentYear = day.getFullYear()
				const currentMonth = day.getMonth() + 1
				const currentDate = day.getDate()

				set(
					temp,
					[currentYear, currentMonth, currentDate],
					[...get(temp, [currentYear, currentMonth, currentDate], []), event]
				)
			}
		}

		return temp
	})

	const filterEvents = (date: CalendarDate): FurryEventEntry[] => {
		return get(indexes.value, [date.year, date.month, date.date], [])
	}

	const handleCalendarUpdate = (_timestamp: number, date: CalendarDate) => {
		filter.query.value = filterEvents(date)
			.map(item => {
				return `(slug = "${item.slug}" AND year = "${item.year}")`
			})
			.join(' OR ')
	}
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

		<transition-group
			appear
			name="v-fade"
		>
			<template
				v-for="(groupedItems, year) in filteredGroupedItems"
				:key="year"
			>
				<n-flex
					size="small"
					:style="{ '--v-fade-leave-duration': 0 }"
					vertical
				>
					<n-divider>{{ year }}</n-divider>

					<transition-group
						appear
						name="v-fade"
					>
						<template
							v-for="groupedItem in groupedItems"
							:key="[groupedItem.slug, groupedItem.year].join(' - ')"
						>
							<n-element :style="{ '--v-fade-leave-duration': 0 }">
								<sections-furry-events-item :item="groupedItem">
									<template #extra>
										<sections-furry-events-buttons :item="groupedItem" />
									</template>
								</sections-furry-events-item>
							</n-element>
						</template>
					</transition-group>
				</n-flex>
			</template>
		</transition-group>
	</n-flex>
</template>

<style lang="scss">
	@use '~/styles/transitions/fade';
</style>