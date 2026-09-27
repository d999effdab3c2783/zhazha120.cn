<script setup lang="ts">
	import type { ImageSupportMethod } from '~/types/support'

	defineProps<{
		readonly item: ImageSupportMethod
	}>()
</script>

<template>
	<n-element class="utils__center--flex">
		<n-image :src="item.src" />
	</n-element>
</template>

<style scoped lang="scss">
	@use '~/styles/utils';
</style>