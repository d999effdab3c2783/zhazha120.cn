<script lang="ts" setup>
	import { useThemeVars } from 'naive-ui';

	import VueBitsDotGrid from '@/components/vue-bits/dot-grid.vue';

	const themeVars = useThemeVars();
	const containerRef = useTemplateRef<ComponentPublicInstance>('containerRef');
	const pageLeave = usePageLeave();
	const elementVisibility = useElementVisibility(containerRef);

	const show = computed(() => {
		return !pageLeave.value && elementVisibility.value;
	});
</script>

<template>
	<n-element ref="containerRef" class="size-full absolute inset-0">
		<template v-if="show">
			<VueBitsDotGrid
				:active-color="themeVars.primaryColor"
				:base-color="themeVars.hoverColor"
				:dot-size="6"
				:gap="18"
			/>
		</template>
	</n-element>
</template>