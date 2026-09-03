<script lang="ts">
	import { eachDayOfInterval } from 'date-fns';

	import type { EventEntry } from '@/data/furry/events';

	export type Indexes = Record<number, Record<number, Record<number, EventEntry[]>>>;
</script>

<script lang="ts" setup>
	import { defaultTo, isNullish, prop } from 'remeda';

	const events = useFurryEvents();

	const indexes: Indexes = {};

	onMounted(() => {
		for (const [slug, event] of Object.entries(events)) {
			const days = eachDayOfInterval({
				start: new Date(event.startDate),
				end: new Date(event.endDate),
			});

			for (const day of days) {
				const currentYear = day.getFullYear();
				const currentMonth = day.getMonth() + 1;
				const currentDay = day.getDate();

				if (isNullish(indexes[currentYear])) {
					indexes[currentYear] = {};
				}

				if (isNullish(indexes[currentYear][currentMonth])) {
					indexes[currentYear][currentMonth] = {};
				}

				if (isNullish(indexes[currentYear][currentMonth][currentDay])) {
					indexes[currentYear][currentMonth][currentDay] = [];
				}

				indexes[currentYear][currentMonth][currentDay].push({
					slug,

					...event,
				});
			}
		}
	});
</script>

<template>
	<n-calendar>
		<template #default="{ year, month, date }">
			<n-element class="mt-2">
				<custom-naive-ui-vertical-stack>
					<template v-for="{ slug, name } in defaultTo(prop(indexes, ...[year, month, date]), []) ?? []">
						<custom-naive-ui-redirect-button
							:href="`/furry/events/${slug}`"
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
				</custom-naive-ui-vertical-stack>
			</n-element>
		</template>
	</n-calendar>
</template>