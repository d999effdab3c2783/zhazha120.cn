<script setup lang="ts">
	import { useDevStore } from '~/stores/dev'

	const devStore = useDevStore()
</script>

<template>
	<n-card
		size="small"
		title="自述"
	>
		<n-divider class="!mt-0" />
		<custom-render-texts :items="devStore.bio" />
	</n-card>
</template>