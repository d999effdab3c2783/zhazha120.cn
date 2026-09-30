<script setup lang="ts">
	import { useRouteParams } from '@vueuse/router'

	import { definePageMeta } from '#imports'
	import type { FurryEventEntry } from '~/types/furry'

	definePageMeta({
		layout: 'subpage',
		title: '行程 & 活动'
	})

	const slug = useRouteParams('slug', null, {
		mode: 'push',
		transform: String
	})

	const filter = (item: FurryEventEntry) => {
		return item.slug === slug.value
	}
</script>

<template>
	<sections-furry-events :default-filter="filter" />
</template>