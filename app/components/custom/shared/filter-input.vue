<script setup lang="ts">
	import { flattenObject, isNotNil, uniq } from 'es-toolkit'
	import { computed, toValue } from 'vue'

	import type { useArrayFilter } from '~/composables/filter'

	const props = defineProps<{
		readonly filter: ReturnType<typeof useArrayFilter>
	}>()

	const keys = computed(() => {
		return uniq(
			toValue(props.filter.input).flatMap(item => {
				const flattened = flattenObject(item)

				return Object.keys(flattened).map(key => {
					return key.replaceAll(/\.\d+/g, '')
				})
			})
		)
	})
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<n-flex size="small">
			<template
				v-for="key in keys"
				:key="key"
			>
				<n-button
					secondary
					size="small"
					@click="$props.filter.query.value += key"
				>
					{{ key }}
				</n-button>
			</template>
		</n-flex>

		<n-form-item
			:feedback="filter.error.value"
			:show-label="false"
			:validation-status="isNotNil(filter.error.value) ? 'error' : undefined"
		>
			<n-input
				v-model:value="$props.filter.query.value"
				type="textarea"
			/>
		</n-form-item>
	</n-flex>
</template>