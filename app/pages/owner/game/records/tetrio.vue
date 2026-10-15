<script lang="ts" setup>
	import { definePageMeta } from '#app/composables/pages'

	definePageMeta({
		layout: 'subpage',
		title: 'tetr.io'
	})
</script>

<template>
	<sections-owner-game-records-tetrio />
</template>