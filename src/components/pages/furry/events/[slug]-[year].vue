<script lang="ts" setup>
	import { useRouteParams } from '@vueuse/router';
	import { isNonNullish } from 'remeda';

	definePage({
		meta: {
			title: '详情',
			layout: 'subpage',
		},
	});

	const events = await useFurryEvents();

	const slug = useRouteParams('slug', undefined, {
		mode: 'replace',
		transform: String,
	});

	const year = useRouteParams('year', undefined, {
		mode: 'replace',
		transform: Number,
	});

	const event = computed(() => {
		return events.find((event) => {
			return event.slug === slug.value && event.year === year.value;
		});
	});
</script>

<template>
	<custom-naive-ui-vertical-stack>
		<template v-if="isNonNullish(event)">
			<sections-furry-event-card v-bind="event" />

			<template v-if="isNonNullish(event) && isNonNullish(event.characters)">
				<n-divider>出的设定</n-divider>

				<template v-for="character in event.characters">
					<sections-furry-character-card v-bind="character" />
				</template>
			</template>
		</template>

		<template v-else>
			<n-card size="small">
				<n-empty />
			</n-card>
		</template>
	</custom-naive-ui-vertical-stack>
</template>