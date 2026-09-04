<script lang="ts" setup>
	import { isNonNullish } from 'remeda'

	const router = useRouter()

	const layouts = Object.fromEntries(
		Object.entries(
			import.meta.glob(['!@/components/layouts/index.vue', '@/components/layouts/*.vue'], {
				import: 'default'
			})
		).map(([path, loader]) => {
			return [(path.split('/').at(-1) ?? path).split('.')[0], loader]
		})
	)

	const activeLayout = computedAsync(async () => {
		return await (
			layouts[
				isNonNullish(router.currentRoute.value.meta.layout) ? router.currentRoute.value.meta.layout : 'default'
			] ?? layouts['default']
		)()
	})
</script>

<template>
	<transitions-fade appear>
		<template v-if="isNonNullish(activeLayout)">
			<Component :is="activeLayout">
				<slot />
			</Component>
		</template>

		<template v-else>
			<spinkit-cube-rotate-scale />
		</template>
	</transitions-fade>
</template>