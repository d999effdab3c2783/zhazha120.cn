<script setup lang="ts">
	import { computed } from 'vue'

	const props = defineProps<{
		readonly id: number
	}>()

	const url = computed(() => {
		return `https://music.163.com/outchain/player?type=2&id=${props.id}&auto=0`
	})
</script>

<template>
	<iframe
		class="border-none w-full"
		:src="url"
	/>
</template>