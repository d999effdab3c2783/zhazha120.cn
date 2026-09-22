<script setup lang="ts">
	import { isNil } from 'es-toolkit'
	import { useLenis } from 'lenis/vue'
	import { onScopeDispose, useTemplateRef } from 'vue'

	import event from '~/shared/event'

	const heroRef = useTemplateRef('heroRef')
	const overviewRef = useTemplateRef('overviewRef')

	const lenis = useLenis()

	event.on('pages.home:scroll', target => {
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
	})

	onScopeDispose(() => {
		event.off('pages.home:scroll')
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