<script setup lang="ts">
	import { isEqual } from 'es-toolkit'

	import type { FurryRenderableItem, FurryRenderableImage, FurryRenderableEmbedVideo } from '~/types/furry'

	defineProps<{
		readonly item: FurryRenderableItem
	}>()
</script>

<template>
	<template v-if="isEqual(item.type, 'image')">
		<sections-furry-custom-render-image :item="item as FurryRenderableImage" />
	</template>

	<template v-if="isEqual(item.type, 'embed_video')">
		<sections-furry-custom-render-embed-video :item="item as FurryRenderableEmbedVideo" />
	</template>
</template>