<script lang="ts">
	import { gsap } from 'gsap'
	import { ScrollTrigger } from 'gsap/ScrollTrigger'

	gsap.registerPlugin(ScrollTrigger)
</script>

<script setup lang="ts">
	import { isNil } from 'es-toolkit'
	import { onWatcherCleanup, useTemplateRef } from 'vue'
	import { watch } from 'vue'

	import { useLenisStore } from '~/stores/lenis'

	const lenisRef = useTemplateRef('lenisRef')

	const lenisStore = useLenisStore()

	watch(
		[lenisRef, () => lenisStore.options],
		([newLenisRef, newOptions]) => {
			if (isNil(newLenisRef)) {
				return
			}

			const { lenis } = newLenisRef

			if (isNil(lenis)) {
				return
			}

			if (isNil(newOptions.autoRaf) || !newOptions.autoRaf) {
				lenis.on('scroll', ScrollTrigger.update)

				const handleTicker = (time: number) => {
					lenis.raf(time * 1000)
				}

				gsap.ticker.add(handleTicker)

				gsap.ticker.lagSmoothing(0)
				ScrollTrigger.refresh()

				onWatcherCleanup(() => {
					lenis.off('scroll', ScrollTrigger.update)
					gsap.ticker.remove(handleTicker)
				})
			}
		},
		{
			immediate: true
		}
	)
</script>

<template>
	<VueLenis
		ref="lenisRef"
		:auto-raf="lenisStore.options.autoRaf ?? false"
		:options="lenisStore.options"
		root
	/>
</template>