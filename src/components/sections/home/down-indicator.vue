<script lang="ts" setup>
import CustomTransitionFade from '@/components/custom/transitions/fade.vue'
import { useWindowScroll } from '@vueuse/core'
import { NElement, NIcon } from 'naive-ui'

defineOptions({
	name: 'SectionsHomeDownIndicator'
})

const emits = defineEmits<{
	(event: 'down'): void
}>()

const scroll = useWindowScroll()

const handleDown = async () => {
	emits('down')
}
</script>

<template>
	<n-element class="absolute bottom-10 left-1/2 -translate-x-1/2">
		<custom-transition-fade appear mode="out-in">
			<template v-if="scroll.y.value <= 0">
				<n-element class="animate-bounce hover:cursor-pointer">
					<n-icon class="size-12 i-tabler:chevron-down" @click="handleDown"/>
				</n-element>
			</template>
		</custom-transition-fade>
	</n-element>
</template>