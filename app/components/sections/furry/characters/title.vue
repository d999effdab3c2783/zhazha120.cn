<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'
	import { shallowRef } from 'vue'

	import type { FurryCharacterEntry } from '~/types/furry'

	defineProps<{
		readonly item: FurryCharacterEntry
	}>()

	const showSlug = shallowRef(false)
</script>

<template>
	<n-flex
		:size="0"
		vertical
	>
		<n-flex
			align="center"
			:size="0"
		>
			<n-text
				class="text-[1.6em] fw-black hover:cursor-help"
				@click="showSlug = !showSlug"
			>
				{{ item.name }}
			</n-text>

			<template v-if="isNotNil(item.species_alias)">
				<n-divider vertical />

				<n-text type="info">物种: {{ item.species_alias }}</n-text>
			</template>
		</n-flex>

		<n-collapse-transition :show="isNotNil(item.slug) && showSlug">
			<n-text
				class="text-[.8em]"
				:depth="3"
			>
				{{ item.slug }}

				<template v-if="isNotNil(item.aliases)">: {{ item.aliases.join(', ') }}</template>
			</n-text>
		</n-collapse-transition>
	</n-flex>
</template>