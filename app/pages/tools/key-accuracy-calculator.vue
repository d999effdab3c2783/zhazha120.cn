<script lang="ts" setup>
	import { definePageMeta } from '#app/composables/pages'

	definePageMeta({
		layout: 'subpage',
		title: '定轨音游段位单曲准度计算器'
	})
</script>

<template>
	<sections-tools-key-accuracy-calculator />
</template>