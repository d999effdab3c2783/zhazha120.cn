<script lang="ts" setup>
	import { isNil, isNotNil } from 'es-toolkit'
	import { get } from 'es-toolkit/compat'
	import { computed } from 'vue'

	import { useFurryStore } from '~/stores/furry.ts'

	const props = defineProps<{
		readonly slug: string
	}>()

	const furryStore = useFurryStore()

	const character = computed(() => {
		return furryStore.characters.find(item => {
			return item.slug === props.slug || (item.aliases ?? []).includes(props.slug)
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