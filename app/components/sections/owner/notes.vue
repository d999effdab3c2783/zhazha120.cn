<script setup lang="ts">
	import { useOwnerStore } from '~/stores/owner'

	const ownerStore = useOwnerStore()
</script>

<template>
	<n-card
		size="small"
		:title="ownerStore.notes.title"
	>
		<n-divider class="!mt-0" />
		<custom-render-texts :items="ownerStore.notes.items" />
	</n-card>
</template>