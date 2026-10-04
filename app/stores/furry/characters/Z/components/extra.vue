<script setup lang="ts">
	import { useFurryCharactersZDataStore } from '~/stores/furry/characters/Z/stores/data'

	const furryCharactersZDataStore = useFurryCharactersZDataStore()
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<sections-furry-custom-informations :items="furryCharactersZDataStore.informations" />
		<sections-furry-custom-assigns :items="furryCharactersZDataStore.assigns" />
		<sections-furry-custom-render :items="furryCharactersZDataStore.renderables" />
		<sections-furry-custom-buttons :items="furryCharactersZDataStore.buttons" />
	</n-flex>
</template>