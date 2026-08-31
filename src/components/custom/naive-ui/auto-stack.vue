<script lang="ts" setup>
	defineOptions({
		inheritAttrs: false,
	});

	const { isMobile } = useResponsive();
</script>

<template>
	<n-flex :vertical="isMobile" size="small" v-bind="$attrs">
		<slot />
	</n-flex>
</template>