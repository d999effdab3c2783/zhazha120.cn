<script lang="ts" setup>
	import { useThemeVars } from 'naive-ui';
	import VueBitsDotGrid from '@/components/vue-bits/dot-grid.vue';

	const themeVars = useThemeVars();
</script>

<template>
	<n-element class="size-full absolute inset-0">
		<VueBitsDotGrid
			:active-color="themeVars.primaryColor"
			:base-color="themeVars.hoverColor"
			:dot-size="6"
			:gap="18"
		/>
	</n-element>
</template>