<script setup lang="ts">
	import { useFurryStore } from '~/stores/furry'

	const furryStore = useFurryStore()

	await furryStore.loadEvents()
</script>

<template>
	<sections-furry-events-list :items="furryStore.events" />
</template>