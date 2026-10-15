<script lang="ts" setup>
	import { definePageMeta } from '#app/composables/pages'

	definePageMeta({
		layout: 'subpage',
		title: 'osu!'
	})
</script>

<template>
	<sections-owner-game-records-osu />
</template>