<script setup lang="ts">
	import type { FurryRenderableImage } from '~/types/furry'

	defineProps<{
		readonly item: FurryRenderableImage
	}>()
</script>

<template>
	<n-image :src="item.src" />
</template>