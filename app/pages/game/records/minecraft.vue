<script lang="ts" setup>
	import { definePageMeta } from '#app/composables/pages'

	definePageMeta({
		layout: 'subpage',
		title: '我的世界 (Minecraft)'
	})
</script>

<template>
	<sections-game-records-minecraft />
</template>