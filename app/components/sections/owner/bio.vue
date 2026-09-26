<script setup lang="ts">
	import { useOwnerStore } from '~/stores/owner'

	const ownerStore = useOwnerStore()
</script>

<template>
	<n-card
		size="small"
		title="调用方式"
	>
		<n-divider class="!mt-0" />
		<custom-texts :items="ownerStore.bio" />
	</n-card>
</template>