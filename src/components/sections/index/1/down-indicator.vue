<script lang="ts" setup>
	import { NElement, NIcon } from 'naive-ui';
	import { useLenis } from 'lenis/vue';
	import FadeTransition from '@/components/transitions/fade.vue';
	import { useEventEmit } from 'mitt-vue';

	const show = shallowRef(false);

	useLenis((lenis) => {
		show.value = lenis.actualScroll <= 0;
	});

	const handleDown = () => {
		useEventEmit('index:scroll', 2);
	};
</script>

<template>
	<n-element class="absolute bottom-10 left-1/2 -translate-x-1/2">
		<FadeTransition appear mode="out-in">
			<template v-if="show">
				<n-element class="animate-bounce hover:cursor-pointer">
					<n-icon class="size-12 i-tabler:chevron-down" @click="handleDown" />
				</n-element>
			</template>
		</FadeTransition>
	</n-element>
</template>