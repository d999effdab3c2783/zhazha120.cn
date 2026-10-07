<script setup lang="ts">
	import { useDevStore } from '~/stores/dev'

	const devStore = useDevStore()
</script>

<template>
	<n-card
		size="small"
		:title="devStore.notes.title"
	>
		<n-divider class="!mt-0" />
		<custom-render-texts :items="devStore.notes.items" />
	</n-card>
</template>