<script lang="ts" setup>
	import { VueLenis } from 'lenis/vue'
	import { isNullish } from 'remeda'

	import lenisData from '@/data/lenis' with { type: 'macro' }

	const lenisRef = useTemplateRef('lenisRef')
	const layoutRef = useTemplateRef<ComponentPublicInstance>('layoutRef')

	watchOnce(lenisRef, () => {
		if (isNullish(lenisRef.value)) {
			return
		}

		const { lenis } = lenisRef.value

		if (isNullish(lenis)) {
			return
		}

		if (lenisData.gsap) {
			gsap.registerPlugin(ScrollTrigger)

			lenis.on('scroll', ScrollTrigger.update)

			gsap.ticker.add((time) => {
				if (isNullish(lenis)) {
					return
				}

				lenis.raf(time * 1000)
			})

			gsap.ticker.lagSmoothing(0)
		}
	})
</script>

<template>
	<layouts-wrapper>
		<template v-if="layoutRef">
			<VueLenis
				ref="lenisRef"
				:auto-raf="lenisData.options.autoRaf ?? false"
				:options="{
					wrapper: layoutRef.$el.querySelector('.n-scrollbar-container'),
					content: layoutRef.$el.querySelector('.n-scrollbar-content'),

					...lenisData.options
				}"
				root
			/>
		</template>

		<n-layout ref="layoutRef" :native-scrollbar="false" position="absolute">
			<n-layout-content>
				<slot />
			</n-layout-content>
		</n-layout>
	</layouts-wrapper>
</template>

<style lang="scss">
	@use 'lenis/dist/lenis';
</style>