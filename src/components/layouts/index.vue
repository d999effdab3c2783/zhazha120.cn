<script lang="ts" setup>
	import { isNonNullish } from 'remeda';

	const route = useRoute();

	const availableLayoutMappings = Object.fromEntries(
		Object.entries(
			import.meta.glob('@/components/layouts/*.vue', {
				import: 'default',
			}),
		).map(([path, importer]) => {
			return [(path.split('/').at(-1) ?? path).split('.')[0], importer];
		}),
	);

	const layout = computedAsync(async () => {
		return await (
			availableLayoutMappings[isNonNullish(route.meta.layout) ? route.meta.layout : 'default'] ??
			availableLayoutMappings['default']
		)();
	});
</script>

<template>
	<Component :is="layout">
		<slot />
	</Component>
</template>