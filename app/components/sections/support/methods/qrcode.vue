<script setup lang="ts">
	import { useElementBounding } from '@vueuse/core'
	import { clsx } from 'clsx'
	import { isNotNil } from 'es-toolkit'
	import { computed, shallowRef, useTemplateRef } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import type { QRCodeSupportMethod } from '~/types/support'

	const props = defineProps<{
		readonly item: QRCodeSupportMethod
	}>()

	const showContent = shallowRef(false)

	const containerRef = useTemplateRef('containerRef')

	const { isMobile } = useResponsive()
	const containerBounding = useElementBounding(containerRef)

	const qrCodeClassNames = computed(() => {
		return clsx('box-content hover:cursor-help', isNotNil(props.item.props) ? props.item.props.class : [])
	})
</script>

<template>
	<n-element
		ref="containerRef"
		class="utils__center--flex"
	>
		<template v-if="isNotNil(item.content)">
			<template v-if="isNotNil(containerRef)">
				<n-flex
					align="center"
					class="text-center"
					size="small"
					vertical
				>
					<n-qr-code
						:value="item.content"
						v-bind="{
							size: containerBounding.width.value / (isMobile ? 2 : 4),
							type: 'svg',

							...item.props,

							class: qrCodeClassNames
						}"
						@click="showContent = !showContent"
					/>

					<n-collapse-transition :show="showContent">
						<n-text
							class="text-[.8em]"
							:depth="3"
						>
							{{ item.content }}
						</n-text>
					</n-collapse-transition>
				</n-flex>
			</template>

			<template v-else>
				<n-spin />
			</template>
		</template>

		<template v-else>
			<n-empty />
		</template>
	</n-element>
</template>

<style scoped lang="scss">
	@use '~/styles/utils';
</style>