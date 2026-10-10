<script lang="ts" setup>
	import { definePageMeta } from '#app/composables/pages'

	definePageMeta({
		layout: 'subpage',
		title: '游戏记录'
	})
</script>

<template>
	<sections-game />
</template>