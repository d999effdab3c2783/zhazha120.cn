<script lang="ts" setup>
import SectionsHomeBackground from '@/components/sections/home/background.vue'
import SectionsHomeDownIndicator from '@/components/sections/home/down-indicator.vue'
import SectionsHomeIntro from '@/components/sections/home/intro.vue'
import { useHasRegistry } from '@/composables/database'
import { useElementVisibility } from '@vueuse/core'
import { NElement } from 'naive-ui'
import { type ComponentPublicInstance, useTemplateRef } from 'vue'

defineOptions({
	name: 'SectionsHome1'
})

const emits = defineEmits<{
	(event: 'down'): void
}>()

const containerRef = useTemplateRef<ComponentPublicInstance>('containerRef')
const containerVisibility = useElementVisibility(containerRef)

const show_intro = useHasRegistry('intro.*')

const handleDown = async () => {
	emits('down')
}
</script>

<template>
	<n-element ref="containerRef" class="relative h-screen">
		<template v-if="containerVisibility">
			<sections-home-background/>
		</template>

		<template v-if="show_intro">
			<n-element class="size-full relative z-120">
				<sections-home-intro/>
			</n-element>
		</template>

		<sections-home-down-indicator @down="handleDown"/>
	</n-element>
</template>