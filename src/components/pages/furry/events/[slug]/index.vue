<script lang="ts" setup>
	import { useRouteParams } from '@vueuse/router'
	import { isEmptyish } from 'remeda'

	const events = await useFurryEvents()

	definePage({
		meta: {
			layout: 'subpage'
		}
	})

	const slug = useRouteParams('slug', undefined, {
		mode: 'replace',
		transform: String
	})

	const filteredEvents = computed(() => {
		return events.filter((event) => {
			return event.slug === slug.value
		})
	})
</script>

<template>
	<template v-if="isEmptyish(filteredEvents)">
		<n-card size="small">
			<n-empty />
		</n-card>
	</template>

	<template v-else>
		<custom-naive-ui-vertical-stack>
			<template v-for="event in filteredEvents">
				<sections-furry-event-card v-bind="event" />
			</template>
		</custom-naive-ui-vertical-stack>
	</template>
</template>