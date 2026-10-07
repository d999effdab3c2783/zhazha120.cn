<script setup lang="ts">
	import type { FurryCharacterRenderableEmbedVideo } from '~/types/furry'

	defineProps<{
		readonly item: FurryCharacterRenderableEmbedVideo
	}>()
</script>

<template>
	<iframe
		class="border-none w-full aspect-video"
		:src="item.src"
	/>
</template>