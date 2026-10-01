<script setup lang="ts">
	import { useRouteParams } from '@vueuse/router'
	import { isNil, isNotNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { definePageMeta } from '#app/composables/pages'
	import { useFurryStore } from '~/stores/furry'
	import { filterArray } from '~/utils/filter'

	definePageMeta({
		layout: 'subpage',
		title: '设定详情'
	})

	const slug = useRouteParams('slug', null, {
		mode: 'push',
		transform: String
	})

	const furryStore = useFurryStore()

	const character = computed(() => {
		return furryStore.characters.find(item => {
			return item.slug === slug.value || (item.aliases ?? []).includes(slug.value)
		})
	})

	const events = computed(() => {
		return furryStore.events.filter(item => {
			if (isNil(item.charactersQuery) || isNil(character.value)) {
				return false
			}

			const filtered = filterArray(furryStore.characters, item.charactersQuery)

			if (isNil(filtered)) {
				return false
			}

			return filtered.includes(character.value)
		})
	})

	await furryStore.loadCharacters()
	await furryStore.loadEvents()
</script>

<template>
	<template v-if="isNotNil(character)">
		<n-flex
			size="small"
			vertical
		>
			<sections-furry-characters-item :item="character" />

			<template v-if="isNotNil(character.renderExtra)">
				<n-divider />

				<n-element>
					<component :is="character.renderExtra()" />
				</n-element>
			</template>

			<template v-if="isNotNil(events) && events.length > 0">
				<n-divider>参与过的行程</n-divider>

				<sections-furry-events-list :items="events" />
			</template>
		</n-flex>
	</template>

	<template v-else>
		<n-card size="small">
			<n-empty />
		</n-card>
	</template>
</template>