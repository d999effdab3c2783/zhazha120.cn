<script lang="ts" setup>
	import { useThemeVars } from 'naive-ui'

	const themeVars = useThemeVars()
</script>

<template>
	<n-flex size="small">
		<n-button :color="themeVars.textColorBase">12345</n-button>
		<n-button :color="themeVars.textColorBase">12345</n-button>
		<n-button :color="themeVars.textColorBase">12345</n-button>
		<n-button :color="themeVars.textColorBase">12345</n-button>
		<n-button :color="themeVars.textColorBase">12345</n-button>
	</n-flex>
</template>