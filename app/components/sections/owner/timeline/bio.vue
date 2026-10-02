<script setup lang="ts">
	import { useOwnerStore } from '~/stores/owner'

	const ownerStore = useOwnerStore()
</script>

<template>
	<n-card
		size="small"
		title="感叹"
	>
		<n-divider class="!mt-0" />
		<custom-render-texts :items="ownerStore.timeline.bio" />
	</n-card>
</template>