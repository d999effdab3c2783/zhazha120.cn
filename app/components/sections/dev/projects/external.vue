<script setup lang="ts">
	import type { ExternalDevProject } from '~/types/dev'

	defineProps<{
		readonly item: ExternalDevProject
	}>()
</script>

<template>
	<sections-dev-projects-base
		:href="item.href"
		icon="i-ant-design:link-outlined"
		:item="item"
	/>
</template>