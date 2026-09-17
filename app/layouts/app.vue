<script lang="ts" setup>
	import { watchOnce } from '@vueuse/core'
	import { isNil, isNotNil } from 'es-toolkit'
	import { gsap } from 'gsap'
	import { ScrollTrigger } from 'gsap/ScrollTrigger'
	import { useTemplateRef } from 'vue'

	import lenisData from '~/data/lenis'

	const lenisRef = useTemplateRef('lenisRef')
	const layoutRef = useTemplateRef('layoutRef')

	watchOnce(lenisRef, () => {
		if (isNil(lenisRef.value)) {
			return
		}

		const { lenis } = lenisRef.value

		if (isNil(lenis)) {
			return
		}

		if (lenisData.gsap) {
			gsap.registerPlugin(ScrollTrigger)

			lenis.on('scroll', ScrollTrigger.update)

			gsap.ticker.add(time => {
				if (isNil(lenis)) {
					return
				}

				lenis.raf(time * 1000)
			})

			gsap.ticker.lagSmoothing(0)
		}
	})
</script>

<template>
	<nuxt-layout name="wrapper">
		<template v-if="isNotNil(layoutRef)">
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

		<n-layout
			ref="layoutRef"
			:native-scrollbar="false"
			position="absolute"
		>
			<n-layout-content>
				<slot />
			</n-layout-content>

			<n-layout-footer class="p-2">
				<sections-layout-footer />
			</n-layout-footer>
		</n-layout>
	</nuxt-layout>
</template>