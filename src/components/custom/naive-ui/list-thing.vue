<script lang="ts" setup>
	const { isMobile } = useResponsive();
</script>

<template>
	<custom-naive-ui-horizontal-stack :wrap="false" align="center">
		<slot name="prefix" />

		<custom-naive-ui-auto-stack :align="isMobile ? undefined : 'center'" class="size-full" justify="space-between">
			<custom-naive-ui-horizontal-stack align="center">
				<slot />
			</custom-naive-ui-horizontal-stack>

			<slot name="suffix" />
		</custom-naive-ui-auto-stack>
	</custom-naive-ui-horizontal-stack>
</template>