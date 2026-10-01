<script setup lang="ts">
	import { useRouteParams } from '@vueuse/router'
	import { computed } from 'vue'

	import { definePageMeta } from '#app/composables/pages'
	import { useFurryStore } from '~/stores/furry'
	import { filterArray } from '~/utils/filter'

	definePageMeta({
		layout: 'subpage',
		title: '行程 & 活动'
	})

	const slug = useRouteParams('slug', null, {
		mode: 'push',
		transform: String
	})

	const furryStore = useFurryStore()

	const items = computed(() => {
		return filterArray(furryStore.events, `slug : ["${slug.value}"]`)
	})

	await furryStore.loadEvents()
</script>

<template>
	<sections-furry-events-list :items="items ?? []" />
</template>