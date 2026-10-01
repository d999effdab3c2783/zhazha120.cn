<script setup lang="ts">
	import type { FurryEventEntry } from '~/types/furry'

	defineProps<{
		readonly item: FurryEventEntry
	}>()
</script>

<template>
	<n-card size="small">
		<template #cover>
			<n-image :src="item.banner" />
		</template>

		<n-flex
			class="leading-snug"
			:size="0"
			vertical
		>
			<sections-furry-events-title :item="item" />
			<sections-furry-events-datetime :item="item" />

			<slot name="extra" />
		</n-flex>
	</n-card>
</template>