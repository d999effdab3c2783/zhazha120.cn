<script lang="ts" setup>
	import { isNil, isNotNil } from 'es-toolkit'
	import { get } from 'es-toolkit/compat'
	import { computed } from 'vue'

	import { useFurryStore } from '~/stores/furry.ts'

	const props = defineProps<{
		readonly slug: string
		readonly year: number
	}>()

	const furryStore = useFurryStore()

	const event = computed(() => {
		return furryStore.events.find(item => {
			return item.slug === props.slug && item.year === props.year
		})
	})

	const characters = computed(() => {
		if (isNil(event.value)) {
			return []
		}

		return get(furryStore.mappings.get(event.value), ['characters'], [])
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