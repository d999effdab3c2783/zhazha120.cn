<script setup lang="ts">
	import { useFurryStore } from '~/stores/furry'

	const furryStore = useFurryStore()

	await furryStore.loadCharacters()
</script>

<template>
	<sections-furry-characters-list :items="furryStore.characters" />
</template>