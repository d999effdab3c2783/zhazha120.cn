<script lang="ts" setup>
	import { definePageMeta } from '#app/composables/pages'

	definePageMeta({
		layout: 'subpage',
		title: '几何冲刺 (Geometry Dash)'
	})
</script>

<template>
	<sections-game-records-geometry-dash />
</template>