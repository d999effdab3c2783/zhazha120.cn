<script setup lang="ts">
	import { useFurryCharactersZhazha120_1DataStore } from '~/stores/furry/characters/zhazha120-1/stores/data'

	const furryCharactersZhazha120_1DataStore = useFurryCharactersZhazha120_1DataStore()
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<sections-furry-characters-custom-informations :items="furryCharactersZhazha120_1DataStore.informations" />
		<sections-furry-characters-custom-assigns :items="furryCharactersZhazha120_1DataStore.assigns" />
		<sections-furry-characters-custom-render :items="furryCharactersZhazha120_1DataStore.renderables" />
	</n-flex>
</template>