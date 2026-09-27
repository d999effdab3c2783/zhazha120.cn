<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import type { ExternalSupportMethod } from '~/types/support'

	defineProps<{
		readonly item: ExternalSupportMethod
	}>()
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<template v-if="isNotNil(item.comment)">
			<n-alert
				class="whitespace-pre-line"
				type="info"
			>
				{{ item.comment }}
			</n-alert>
		</template>

		<n-element class="relative">
			<n-element
				class="utils__center--grid bg-black/80 opacity-0 transition-(duration-500 ease-in-out property-opacity) position-(inset-0 absolute) hover:opacity-100"
			>
				<custom-redirect
					#="{ aProps, redirect }"
					:href="item.url"
				>
					<n-button
						tag="a"
						v-bind="aProps"
						type="primary"
						@click.prevent="redirect"
					>
						<template #icon>
							<n-icon class="i-ant-design:link-outlined" />
						</template>

						访问
					</n-button>
				</custom-redirect>
			</n-element>

			<iframe
				class="border-none min-h-240 w-full pointer-events-none select-none"
				:src="item.url"
			/>
		</n-element>
	</n-flex>
</template>

<style scoped lang="scss">
	@use '~/styles/utils';
</style>