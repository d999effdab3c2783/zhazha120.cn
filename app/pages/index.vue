<script setup lang="ts">
	import { isNil } from 'es-toolkit'
	import { useLenis } from 'lenis/vue'
	import { onScopeDispose, useTemplateRef } from 'vue'

	import event from '~/shared/event'
	import type { Events } from '~/types/event'

	const heroRef = useTemplateRef('heroRef')
	const overviewRef = useTemplateRef('overviewRef')

	const lenis = useLenis()

	const handleScroll = (target: Events['pages.home:scroll']) => {
		if (isNil(lenis.value)) {
			return
		}

		const mappings = {
			hero: heroRef,
			overview: overviewRef
		} as const

		if (isNil(mappings[target]) || isNil(mappings[target].value)) {
			return
		}

		lenis.value.scrollTo(mappings[target].value.$el)
	}

	event.on('pages.home:scroll', handleScroll)

	onScopeDispose(() => {
		event.off('pages.home:scroll', handleScroll)
	})
</script>

<template>
	<n-flex
		:size="0"
		vertical
	>
		<sections-home-hero ref="heroRef" />
		<sections-home-overview ref="overviewRef" />
	</n-flex>
</template>