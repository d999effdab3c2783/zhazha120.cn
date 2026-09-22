<script setup lang="ts">
	import { isNil } from 'es-toolkit'
	import { shallowRef, useTemplateRef, watch } from 'vue'

	import { useLenisStore } from '~/stores/lenis'

	const initialized = shallowRef(false)

	const layoutRef = useTemplateRef('layoutRef')

	const lenisStore = useLenisStore()

	watch(
		layoutRef,
		newLayoutRef => {
			if (isNil(newLayoutRef)) {
				return
			}

			lenisStore.options.wrapper = newLayoutRef.$el.querySelector('.n-scrollbar-container')
			lenisStore.options.content = newLayoutRef.$el.querySelector('.n-scrollbar-content')

			initialized.value = true
		},
		{
			immediate: true
		}
	)
</script>

<template>
	<nuxt-layout name="wrapper">
		<n-layout
			ref="layoutRef"
			:native-scrollbar="false"
			position="absolute"
		>
			<template v-if="initialized && lenisStore.enabled">
				<app-lenis />
			</template>

			<n-layout-content>
				<slot />
			</n-layout-content>

			<n-layout-footer>
				<sections-layout-footer />
			</n-layout-footer>
		</n-layout>
	</nuxt-layout>
</template>