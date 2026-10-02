<script setup lang="ts">
	import { definePageMeta } from '#app/composables/pages'

	definePageMeta({
		layout: 'subpage',
		title: '时间线'
	})
</script>

<template>
	<sections-owner-timeline />
</template>