<script lang="ts" setup>
	import { definePageMeta } from '#app/composables/pages'

	definePageMeta({
		layout: 'subpage',
		title: 'osu!'
	})
</script>

<template>
	<sections-game-records-osu />
</template>