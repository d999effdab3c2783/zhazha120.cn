<script setup lang="ts">
	import { isNil } from 'es-toolkit'
	import { computed } from 'vue'

	import { useArrayFilter } from '~/composables/filter'
	import { useFurryStore } from '~/stores/furry'

	const furryStore = useFurryStore()

	const filter = useArrayFilter(furryStore.characters)

	const characters = computed(() => {
		return filter.output.value.filter(item => {
			return isNil(item.private) || !item.private
		})
	})

	await furryStore.loadCharacters()
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<n-card
			size="small"
			title="过滤"
		>
			<custom-shared-filter-input :filter="filter" />
		</n-card>

		<n-divider />

		<template
			v-for="(item, index) in characters"
			:key="index"
		>
			<sections-furry-characters-item :item="item" />
		</template>
	</n-flex>
</template>

<style lang="scss">
	@use '~/styles/transitions/fade';
</style>