<script setup lang="ts">
	import type { FurryCharacterRenderableImage } from '~/types/furry'

	defineProps<{
		readonly item: FurryCharacterRenderableImage
	}>()
</script>

<template>
	<n-image :src="item.src" />
</template>