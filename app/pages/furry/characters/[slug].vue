<script setup lang="ts">
	import { useRouteParams } from '@vueuse/router'
	import { isNil, isNotNil } from 'es-toolkit'
	import { get } from 'es-toolkit/compat'
	import { computed } from 'vue'

	import { definePageMeta } from '#app/composables/pages'
	import { useFurryStore } from '~/stores/furry'

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
		if (isNil(character.value)) {
			return []
		}

		return get(furryStore.mappings.get(character.value), ['events'], [])
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