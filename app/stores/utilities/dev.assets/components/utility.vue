<script lang="ts">
	export type ArrayChecks = Record<number, boolean>
</script>

<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'
	import { set } from 'es-toolkit/compat'
	import { shallowReactive } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import { useAssetsStore } from '~/stores/assets'

	const assetsStore = useAssetsStore()

	const { isMobile } = useResponsive()

	const checks = shallowReactive<ArrayChecks>({})

	const updateAllChecks = (newState: boolean) => {
		for (const i in assetsStore.registry) {
			set(checks, [i], newState)
		}
	}

	const handleUpdate = async () => {
		const selectedAssets = assetsStore.registry.filter((_, index) => {
			return isNotNil(checks[index]) && checks[index]
		})

		await $fetch('/api/assets', {
			method: 'PATCH',
			body: selectedAssets
		})
	}

	await assetsStore.load()
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<n-flex
			:align="!isMobile ? 'center' : undefined"
			class="n-button__patch"
			size="small"
			:vertical="isMobile"
		>
			<n-button
				class="py-2 flex-1"
				@click="updateAllChecks(true)"
			>
				全选
			</n-button>

			<n-button
				class="py-2 flex-1"
				@click="updateAllChecks(false)"
			>
				全不选
			</n-button>
		</n-flex>

		<n-divider />

		<template
			v-for="({ url, path, preview }, index) in assetsStore.registry"
			:key="index"
		>
			<n-checkbox v-model:checked="checks[index]">
				<n-flex
					align="center"
					size="small"
				>
					<n-image
						class="h-10"
						:src="preview"
						@click.stop
					/>

					<n-flex
						:size="0"
						vertical
					>
						<n-text>{{ path }}</n-text>

						<n-text
							class="text-[.8em]"
							:depth="3"
						>
							{{ url }}
						</n-text>
					</n-flex>
				</n-flex>
			</n-checkbox>

			<n-divider class="!my-0" />
		</template>

		<n-button
			type="primary"
			@click="handleUpdate"
		>
			<template #icon>
				<n-icon class="i-ant-design:sync-outlined" />
			</template>

			更新
		</n-button>
	</n-flex>
</template>

<style lang="scss">
	@use '~/styles/patches';
</style>