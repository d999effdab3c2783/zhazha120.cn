<script setup lang="ts">
	import type { FurryCharacter } from '~/types/furry'

	defineProps<{
		readonly item: FurryCharacter
	}>()
</script>

<template>
	<n-flex
		align="center"
		size="small"
		vertical
	>
		<n-image
			class="[&>img]:w-full"
			:src="item.illustration"
		/>

		<n-text :depth="3">仅供展示 不保证原图</n-text>
	</n-flex>
</template>