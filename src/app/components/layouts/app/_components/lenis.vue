<script lang="ts">
	type VueLenisExpose = Pick<InstanceType<typeof VueLenis>, 'wrapper' | 'content' | 'lenis'>
</script>

<script setup lang="ts">
	import { isNil } from 'es-toolkit'
	import { gsap } from 'gsap'
	import { ScrollTrigger } from 'gsap/ScrollTrigger'
	import { VueLenis } from 'lenis/vue'
	import { onWatcherCleanup, useTemplateRef } from 'vue'
	import { watch } from 'vue'

	import pinia from '@/app/shared/pinia'
	import { useLenisStore } from '@/app/stores/lenis'

	const lenisStore = useLenisStore(pinia)
	const lenisRef = useTemplateRef<VueLenisExpose>('lenisRef')

	watch(
		[lenisRef, () => lenisStore.options],
		([newLenisRef, newOptions]) => {
			if (isNil(newLenisRef) || isNil(newLenisRef.lenis)) {
				return
			}

			if (isNil(newOptions.autoRaf) || !newOptions.autoRaf) {
				newLenisRef.lenis.on('scroll', ScrollTrigger.update)

				const handleTicker = (time: number) => {
					if (isNil(newLenisRef) || isNil(newLenisRef.lenis)) {
						return
					}

					newLenisRef.lenis.raf(time * 1000)
				}

				gsap.registerPlugin(ScrollTrigger)

				gsap.ticker.add(handleTicker)
				gsap.ticker.lagSmoothing(0)

				ScrollTrigger.refresh()

				onWatcherCleanup(() => {
					if (isNil(newLenisRef) || isNil(newLenisRef.lenis)) {
						return
					}

					newLenisRef.lenis.off('scroll', ScrollTrigger.update)
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
	<vue-lenis
		ref="lenisRef"
		:auto-raf="lenisStore.options.autoRaf ?? false"
		:options="lenisStore.options"
		root
	/>
</template>