<script lang="ts" setup>
	import { useRouteParams } from '@vueuse/router'

	import { definePageMeta } from '#app/composables/pages'

	definePageMeta({
		layout: 'subpage',
		title: '设定详情'
	})

	const slug = useRouteParams('slug', null, {
		mode: 'push',
		transform: String
	})
</script>

<template>
	<sections-furry-characters-detail :slug="slug" />
</template>