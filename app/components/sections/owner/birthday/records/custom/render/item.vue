<script setup lang="ts">
	import { isEqual } from 'es-toolkit'

	import type {
		OwnerBirthdayRecordRenderableItem,
		OwnerBirthdayRecordRenderableImage,
		OwnerBirthdayRecordEmbedVideo
	} from '~/types/owner'

	defineProps<{
		readonly item: OwnerBirthdayRecordRenderableItem
	}>()
</script>

<template>
	<template v-if="isEqual(item.type, 'image')">
		<sections-owner-birthday-records-custom-render-image :item="item as OwnerBirthdayRecordRenderableImage" />
	</template>

	<template v-if="isEqual(item.type, 'embed_video')">
		<sections-owner-birthday-records-custom-render-embed-video :item="item as OwnerBirthdayRecordEmbedVideo" />
	</template>
</template>