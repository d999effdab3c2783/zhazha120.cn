<script setup lang="ts">
	import { sortBy } from 'es-toolkit'

	import { useResponsive } from '~/composables/responsive'
	import { useDevStore } from '~/stores/dev'

	const devStore = useDevStore()

	const { isMobile } = useResponsive()

	await devStore.loadStacks()
</script>

<template>
	<n-flex
		size="small"
		:vertical="isMobile"
	>
		<template
			v-for="(item, index) in sortBy(devStore.stacks, ['sort'])"
			:key="index"
		>
			<sections-dev-stacks-item :item="item" />
		</template>
	</n-flex>
</template>