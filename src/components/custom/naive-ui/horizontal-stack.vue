<script lang="ts" setup>
	defineOptions({
		inheritAttrs: false
	})
</script>

<template>
	<n-flex size="small" v-bind="$attrs">
		<slot />
	</n-flex>
</template>