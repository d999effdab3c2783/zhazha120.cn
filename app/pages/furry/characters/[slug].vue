<script setup lang="ts">
	import { useRouteParams } from '@vueuse/router'
	import { isNotNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { definePageMeta } from '#imports'
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

	await furryStore.loadCharacters()
</script>

<template>
	<template v-if="isNotNil(character)">
		<n-flex
			size="small"
			vertical
		>
			<sections-furry-characters-item :item="character" />

			<template v-if="isNotNil(character.renderExtra)">
				<n-element>
					<component :is="character.renderExtra()" />
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