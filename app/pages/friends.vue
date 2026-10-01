<script setup lang="ts">
	import { definePageMeta } from '#app/composables/pages'

	definePageMeta({
		layout: 'subpage',
		title: '朋友们'
	})
</script>

<template>
	<sections-friends />
</template>