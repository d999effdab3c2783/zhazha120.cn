<script lang="ts">
	import { eachDayOfInterval } from 'date-fns'

	import type { EventEntry } from '@/data/furry/events'

	export type IndexedEventEntry = EventEntry & {
		readonly detailRoutePath?: string
	}

	export type Indexes = {
		[year: string]: {
			[month: string]: {
				[date: string]: IndexedEventEntry[]
			}
		}
	}
</script>

<script lang="ts" setup>
	import { defaultTo, isNonNullish, isNullish, prop } from 'remeda'

	const events = await useFurryEvents()

	const indexes: Indexes = {}

	onMounted(() => {
		for (const event of events) {
			const days = eachDayOfInterval({
				start: new Date(event.startDate),
				end: new Date(event.endDate)
			})

			for (const day of days) {
				const currentYear = day.getFullYear()
				const currentMonth = day.getMonth() + 1
				const currentDay = day.getDate()

				if (isNullish(indexes[currentYear])) {
					indexes[currentYear] = {}
				}

				if (isNullish(indexes[currentYear][currentMonth])) {
					indexes[currentYear][currentMonth] = {}
				}

				if (isNullish(indexes[currentYear][currentMonth][currentDay])) {
					indexes[currentYear][currentMonth][currentDay] = []
				}

				Object.assign(event, {
					detailRoutePath: `/furry/events/${event.slug}/${event.year}`
				})

				indexes[currentYear][currentMonth][currentDay].push(event)
			}
		}
	})
</script>

<template>
	<n-calendar>
		<template #default="{ year, month, date }">
			<n-element class="mt-2">
				<custom-naive-ui-vertical-stack>
					<template
						v-for="{ name, detailRoutePath } in defaultTo(prop(indexes, ...[year, month, date]), []) ?? []"
					>
						<template v-if="isNonNullish(detailRoutePath) && $route.path !== detailRoutePath">
							<custom-naive-ui-redirect-button
								:href="detailRoutePath"
								class="size-fit"
								tag="a"
								text
								type="primary"
							>
								<custom-naive-ui-text-stack>
									<n-text class="text-(current [1.5em]) fw-bold">{{ name }}</n-text>
								</custom-naive-ui-text-stack>
							</custom-naive-ui-redirect-button>
						</template>

						<template v-else>
							<custom-naive-ui-text-stack>
								<n-text class="text-[1.5em]">{{ name }}</n-text>
							</custom-naive-ui-text-stack>
						</template>
					</template>
				</custom-naive-ui-vertical-stack>
			</n-element>
		</template>
	</n-calendar>
</template>