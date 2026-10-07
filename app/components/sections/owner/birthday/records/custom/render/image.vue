<script setup lang="ts">
	import type { OwnerBirthdayRecordRenderableImage } from '~/types/owner'

	defineProps<{
		readonly item: OwnerBirthdayRecordRenderableImage
	}>()
</script>

<template>
	<n-image
		class="[&>img]:w-full"
		:src="item.src"
	/>
</template>