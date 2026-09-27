<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'
	import { computed, shallowRef } from 'vue'

	const props = defineProps<{
		readonly error: unknown

		readonly clearError: (
			options: Partial<{
				readonly redirect: string
			}>
		) => void
	}>()

	defineOptions({
		inheritAttrs: false
	})

	const cleared = shallowRef(false)

	const formatted = computed(() => {
		const temp = new Array<string>()

		const process = (input: typeof props.error) => {
			if (input instanceof Error) {
				if (isNotNil(input.stack)) {
					temp.push(input.stack)
				}

				if (isNotNil(input.cause)) {
					return process(input.cause)
				}
			} else {
				const formattedInput = JSON.stringify(input, null, 4)

				temp.push(formattedInput)
			}

			return temp
		}

		return process(props.error)
	})

	const handleClear = () => {
		props.clearError({
			redirect: '/'
		})

		cleared.value = true
	}
</script>

<template>
	<nuxt-layout name="app">
		<n-element class="utils__center--grid min-h-screen">
			<n-flex
				align="center"
				class="px-2 pb-2 container"
				size="small"
				vertical
			>
				<n-h1>
					<n-text type="error">错误发生</n-text>
				</n-h1>

				<n-card size="small">
					<n-log
						class="!h-full"
						:lines="formatted"
						trim
					/>
				</n-card>

				<n-button
					class="mt-10"
					:disabled="cleared"
					@click="handleClear"
				>
					我知道了
				</n-button>
			</n-flex>
		</n-element>
	</nuxt-layout>
</template>

<style scoped lang="scss">
	@use '~/styles/utils';
</style>