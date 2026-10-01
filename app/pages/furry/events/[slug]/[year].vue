<script setup lang="ts">
	import { useRouteParams } from '@vueuse/router'
	import { isNil, isNotNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { definePageMeta } from '#app/composables/pages'
	import { useFurryStore } from '~/stores/furry'
	import { filterArray } from '~/utils/filter'

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

	const characters = computed(() => {
		if (isNil(event.value) || isNil(event.value.charactersQuery)) {
			return null
		}

		return filterArray(furryStore.characters, event.value.charactersQuery)
	})

	await furryStore.loadCharacters()
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
				<n-divider />

				<n-element>
					<component :is="event.renderExtra()" />
				</n-element>
			</template>

			<template v-if="isNotNil(characters) && characters.length > 0">
				<n-divider>出的设定</n-divider>

				<sections-furry-characters-list :items="characters" />
			</template>
		</n-flex>
	</template>

	<template v-else>
		<n-card size="small">
			<n-empty />
		</n-card>
	</template>
</template>