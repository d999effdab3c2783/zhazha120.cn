<script setup lang="ts">
	import type {
		FurryCharacterRenderableEmbedVideo,
		FurryCharacterRenderableImage,
		FurryCharacterRenderableItem
	} from '~/types/furry'

	import { isEqual } from 'es-toolkit'

	defineProps<{
		readonly item: FurryCharacterRenderableItem
	}>()
</script>

<template>
	<template v-if="isEqual(item.type, 'image')">
		<sections-furry-characters-custom-render-image :item="item as FurryCharacterRenderableImage" />
	</template>

	<template v-if="isEqual(item.type, 'embed_video')">
		<sections-furry-characters-custom-render-embed-video :item="item as FurryCharacterRenderableEmbedVideo" />
	</template>
</template>