<script setup lang="ts">
	import type { OwnerBirthdayRecordEmbedVideo } from '~/types/owner'

	defineProps<{
		readonly item: OwnerBirthdayRecordEmbedVideo
	}>()
</script>

<template>
	<iframe
		class="border-none w-full aspect-video"
		:src="item.src"
	/>
</template>