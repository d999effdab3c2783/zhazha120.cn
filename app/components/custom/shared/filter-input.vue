<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import type { useArrayFilter } from '~/composables/filter'

	defineProps<{
		readonly filter: ReturnType<typeof useArrayFilter>
	}>()
</script>

<template>
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
</template>