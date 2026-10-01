<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import type { FurryEventEntry } from '~/types/furry'

	defineProps<{
		readonly item: FurryEventEntry
	}>()

	const generateSlugLink = (slug: string) => {
		return `/furry/events/${slug}`
	}
</script>

<template>
	<n-flex
		align="center"
		justify="space-between"
		:size="0"
	>
		<n-flex
			align="center"
			:size="0"
		>
			<n-text class="text-[1.2em]">{{ item.name }}</n-text>
			<n-divider vertical />
			<n-text type="info">{{ item.theme }}</n-text>
		</n-flex>

		<template v-if="isNotNil(item.slug)">
			<custom-redirect
				#="{ aProps, redirect }"
				:href="generateSlugLink(item.slug)"
			>
				<n-button
					tag="a"
					text
					type="primary"
					v-bind="aProps"
					@click.prevent="redirect"
				>
					{{ item.slug }}
				</n-button>
			</custom-redirect>
		</template>
	</n-flex>
</template>