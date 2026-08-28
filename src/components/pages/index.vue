<script lang="ts" setup>
	import { isNonNullish, isNullish } from 'remeda';
	import { useLenis } from 'lenis/vue';
	import { useEventListener } from 'mitt-vue';

	const lenis = useLenis();
	const section1Ref = useTemplateRef<ComponentPublicInstance>('section1Ref');
	const section2Ref = useTemplateRef<ComponentPublicInstance>('section2Ref');

	useEventListener('index:scroll', (target: number) => {
		if (isNullish(lenis.value)) {
			return;
		}

		switch (target) {
			case 1:
				if (isNonNullish(section1Ref.value)) {
					lenis.value.scrollTo(section1Ref.value.$el);
				}
				break;
			case 2:
				if (isNonNullish(section2Ref.value)) {
					lenis.value.scrollTo(section2Ref.value.$el);
				}
				break;
		}
	});
</script>

<template>
	<sections-index-1 ref="section1Ref" />
	<sections-index-2 ref="section2Ref" />
</template>