<script setup lang="ts">
	import type { FurryRenderableEmbedVideo } from '~/types/furry'

	defineProps<{
		readonly item: FurryRenderableEmbedVideo
	}>()
</script>

<template>
	<iframe
		class="border-none w-full aspect-video"
		:src="item.src"
	/>
</template>