<script setup lang="ts">
	import { useFurryEventsThatfurcon2026DataStore } from '~/stores/furry/events/2026/thatfurcon/stores/data'
	import { qq } from '~/stores/owner/information'

	const furryEventsThatfurcon2026DataStore = useFurryEventsThatfurcon2026DataStore()

	await furryEventsThatfurcon2026DataStore.loadPhotos()
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<sections-furry-events-custom-qzone
			:id="furryEventsThatfurcon2026DataStore.qzone.id"
			:qq="qq"
		/>

		<sections-furry-events-custom-photos :items="furryEventsThatfurcon2026DataStore.photos" />
	</n-flex>
</template>