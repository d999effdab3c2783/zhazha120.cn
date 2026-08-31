<script lang="ts" setup>
	defineOptions({
		inheritAttrs: false,
	});
</script>

<template>
	<n-element class="text-(current start wrap)" v-bind="$attrs">
		<n-flex :size="0" vertical>
			<slot />
		</n-flex>
	</n-element>
</template>