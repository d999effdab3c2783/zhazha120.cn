<script setup lang="ts">
	import { useFurryCharactersZDataStore } from '~/stores/furry/characters/Z/stores/data'

	const furryCharactersZDataStore = useFurryCharactersZDataStore()
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<sections-furry-characters-custom-informations :items="furryCharactersZDataStore.informations" />
		<sections-furry-characters-custom-assigns :items="furryCharactersZDataStore.assigns" />
		<sections-furry-characters-custom-render :items="furryCharactersZDataStore.renderables" />
		<sections-furry-characters-custom-buttons :items="furryCharactersZDataStore.buttons" />
	</n-flex>
</template>