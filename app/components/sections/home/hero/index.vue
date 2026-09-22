<script setup lang="ts">
	import { useThemeVars } from 'naive-ui'

	const themeVars = useThemeVars()
</script>

<template>
	<n-element class="h-screen position-relative">
		<sections-home-hero-background
			:active-color="themeVars.primaryColor"
			:base-color="themeVars.hoverColor"
			class="size-full pointer-events-none position-(inset-0 absolute)"
			:dot-size="6"
			:gap="18"
		/>

		<n-element class="grid grid-(rows-3 place-items-center) size-full position-relative z-120">
			<sections-home-hero-profile class="grid-row-2" />
			<sections-home-hero-down-indicator class="grid-row-3" />
		</n-element>
	</n-element>
</template>