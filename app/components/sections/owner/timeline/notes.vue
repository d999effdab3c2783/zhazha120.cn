<script setup lang="ts">
	import { useOwnerStore } from '~/stores/owner'

	const ownerStore = useOwnerStore()
</script>

<template>
	<n-card
		size="small"
		:title="ownerStore.timeline.notes.title"
	>
		<n-divider class="!mt-0" />
		<custom-render-texts :items="ownerStore.timeline.notes.items" />
	</n-card>
</template>