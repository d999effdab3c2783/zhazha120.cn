<script lang="ts" setup>
	import { isNonNullish } from 'remeda';

	import Loading from '@/components/spinkit/cube-rotate-scale.vue';
	import FadeTransition from '@/components/transitions/fade.vue';

	const route = useRoute();

	const layouts = Object.fromEntries(
		Object.entries(
			import.meta.glob(['!@/components/layouts/index.vue', '@/components/layouts/*.vue'], {
				import: 'default',
			}),
		).map(([path, loader]) => {
			return [(path.split('/').at(-1) ?? path).split('.')[0], loader];
		}),
	);

	const activeLayout = computedAsync(async () => {
		return await (layouts[isNonNullish(route.meta.layout) ? route.meta.layout : 'default'] ?? layouts['default'])();
	});
</script>

<template>
	<FadeTransition appear>
		<template v-if="isNonNullish(activeLayout)">
			<Component :is="activeLayout">
				<slot />
			</Component>
		</template>

		<template v-else>
			<Loading />
		</template>
	</FadeTransition>
</template>