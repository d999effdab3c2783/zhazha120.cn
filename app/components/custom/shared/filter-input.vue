<script setup lang="ts">
	import { flattenObject, isNotNil, uniq } from 'es-toolkit'
	import { computed, shallowRef, toRefs, toValue } from 'vue'

	import type { useArrayFilter } from '~/composables/filter'
	import tutorial from '~/utils/filter/assets/tutorial.bin?url'

	const props = defineProps<{
		readonly filter: ReturnType<typeof useArrayFilter>
	}>()

	const { filter } = toRefs(props)

	const showTutorial = shallowRef(false)

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

	const handleClick = (key: string) => {
		filter.value.query.value ??= ''
		filter.value.query.value += key
	}
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<n-flex size="small">
			<n-button
				size="small"
				@click="showTutorial = true"
			>
				<template #icon>
					<n-icon class="i-ant-design:question-circle-outlined" />
				</template>

				使用方法
			</n-button>

			<n-image-preview
				v-model:show="showTutorial"
				:src="tutorial"
			/>

			<template
				v-for="key in keys"
				:key="key"
			>
				<n-button
					secondary
					size="small"
					@click="handleClick(key)"
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
				v-model:value="filter.query.value"
				type="textarea"
			/>
		</n-form-item>
	</n-flex>
</template>