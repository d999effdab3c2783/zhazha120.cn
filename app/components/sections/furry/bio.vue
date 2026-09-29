<script setup lang="ts">
	import { useFurryStore } from '~/stores/furry'

	const furryStore = useFurryStore()
</script>

<template>
	<n-card
		size="small"
		title="说明"
	>
		<n-divider class="!mt-0" />
		<custom-render-texts :items="furryStore.bio" />
	</n-card>
</template>