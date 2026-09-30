<script setup lang="ts">
	import { definePageMeta } from '#app/composables/pages'

	definePageMeta({
		layout: 'subpage',
		title: '行程 & 活动'
	})
</script>

<template>
	<sections-furry-events />
</template>