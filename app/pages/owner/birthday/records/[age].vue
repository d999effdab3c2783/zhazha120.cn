<script lang="tsx" setup>
	import { useRouteParams } from '@vueuse/router'

	import { definePageMeta } from '#app/composables/pages'

	definePageMeta({
		layout: 'subpage',
		title: '生日记录'
	})

	const age = useRouteParams('age', null, {
		mode: 'push',
		transform: Number
	})
</script>

<template>
	<sections-owner-birthday-records-detail :age="age" />
</template>