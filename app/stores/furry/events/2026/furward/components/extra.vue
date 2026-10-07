<script setup lang="ts">
	import { useFurryEventsFurward2026DataStore } from '~/stores/furry/events/2026/furward/stores/data'
	import { qq } from '~/stores/owner/information'

	const furryEventsFurward2026DataStore = useFurryEventsFurward2026DataStore()

	await furryEventsFurward2026DataStore.loadPhotos()
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<sections-furry-events-custom-qzone
			:id="furryEventsFurward2026DataStore.qzone.id"
			:qq="qq"
		/>

		<sections-furry-events-custom-photos :items="furryEventsFurward2026DataStore.photos" />
	</n-flex>
</template>