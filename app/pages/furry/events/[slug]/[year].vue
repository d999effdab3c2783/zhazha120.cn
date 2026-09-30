<script setup lang="ts">
	import { useRouteParams } from '@vueuse/router'
	import { isNotNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { definePageMeta } from '#app/composables/pages'
	import { useFurryStore } from '~/stores/furry'

	definePageMeta({
		layout: 'subpage',
		title: '行程详情'
	})

	const slug = useRouteParams('slug', null, {
		mode: 'push',
		transform: String
	})

	const year = useRouteParams('year', null, {
		mode: 'push',
		transform: Number
	})

	const furryStore = useFurryStore()

	const event = computed(() => {
		return furryStore.events.find(item => {
			return item.slug === slug.value && item.year === year.value
		})
	})

	await furryStore.loadEvents()
</script>

<template>
	<template v-if="isNotNil(event)">
		<n-flex
			size="small"
			vertical
		>
			<sections-furry-events-item :item="event">
				<template #extra>
					<sections-furry-events-buttons :item="event">
						<template #detail>
							<n-element class="hidden" />
						</template>
					</sections-furry-events-buttons>
				</template>
			</sections-furry-events-item>

			<template v-if="isNotNil(event.renderExtra)">
				<n-element>
					<component :is="event.renderExtra()" />
				</n-element>
			</template>
		</n-flex>
	</template>

	<template v-else>
		<n-card size="small">
			<n-empty />
		</n-card>
	</template>
</template>