<script lang="ts" setup>
	import { useLenis } from 'lenis/vue'
	import { useEventEmit } from 'mitt-vue'

	const show = shallowRef(false)

	useLenis((lenis) => {
		show.value = 0 >= lenis.actualScroll
	})

	const handleDown = () => {
		useEventEmit('index:scroll', 2)
	}
</script>

<template>
	<n-element class="absolute bottom-10 left-1/2 -translate-x-1/2">
		<transitions-fade appear mode="out-in">
			<template v-if="show">
				<n-element class="animate-bounce hover:cursor-pointer">
					<n-icon class="size-12 i-tabler:chevron-down" @click="handleDown" />
				</n-element>
			</template>
		</transitions-fade>
	</n-element>
</template>