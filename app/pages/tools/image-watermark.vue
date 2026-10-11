<script lang="ts" setup>
	import { definePageMeta } from '#app/composables/pages'

	definePageMeta({
		layout: 'subpage',
		title: '图片水印工具'
	})
</script>

<template>
	<sections-tools-image-watermark />
</template>