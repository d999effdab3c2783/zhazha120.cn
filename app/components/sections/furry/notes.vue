<script setup lang="ts">
	import { useFurryStore } from '~/stores/furry'

	const furryStore = useFurryStore()
</script>

<template>
	<n-card
		size="small"
		:title="furryStore.notes.title"
	>
		<n-divider class="!mt-0" />
		<custom-render-texts :items="furryStore.notes.items" />
	</n-card>
</template>