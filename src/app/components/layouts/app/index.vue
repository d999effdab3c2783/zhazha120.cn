<script setup lang="ts">
	import type { ComponentPublicInstance } from 'vue'

	import { isNil } from 'es-toolkit'
	import { NLayout, NLayoutContent } from 'naive-ui'
	import { shallowRef, useTemplateRef, watch } from 'vue'

	import Lenis from '@/app/components/layouts/app/_components/lenis.vue'
	import SuspenseWrapper from '@/app/components/layouts/app/_components/suspense.vue'
	import WrapperLayout from '@/app/components/layouts/wrapper/index.vue'
	import pinia from '@/app/shared/pinia'
	import { useLenisStore } from '@/app/stores/lenis'

	const initialized = shallowRef(false)

	const lenisStore = useLenisStore(pinia)
	const layoutRef = useTemplateRef<ComponentPublicInstance>('layoutRef')

	watch(
		layoutRef,
		newLayoutRef => {
			if (!lenisStore.enabled || isNil(newLayoutRef) || initialized.value) {
				return
			}

			const container = newLayoutRef.$el.querySelector('.n-scrollbar-container')

			if (isNil(container)) {
				return
			}

			lenisStore.options.wrapper = container

			const content = newLayoutRef.$el.querySelector('.n-scrollbar-content')

			if (isNil(content)) {
				return
			}

			lenisStore.options.content = content

			initialized.value = true
		},
		{
			immediate: true
		}
	)
</script>

<template>
	<wrapper-layout>
		<n-layout
			ref="layoutRef"
			:native-scrollbar="false"
			position="absolute"
		>
			<template v-if="initialized">
				<lenis />
			</template>

			<n-layout-content>
				<suspense-wrapper>
					<slot />
				</suspense-wrapper>
			</n-layout-content>
		</n-layout>
	</wrapper-layout>
</template>