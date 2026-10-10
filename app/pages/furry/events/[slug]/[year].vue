<script lang="ts" setup>
	import { useRouteParams } from '@vueuse/router'

	import { definePageMeta } from '#app/composables/pages'

	definePageMeta({
		layout: 'subpage',
		title: '行程详情'
	})

	const slug = useRouteParams('slug', null, {
		mode: 'push',
		transform: String
	})

	const year = useRouteParams('year', null, {
		mode: 'push',
		transform: Number
	})
</script>

<template>
	<sections-furry-events-detail
		:slug="slug"
		:year="year"
	/>
</template>