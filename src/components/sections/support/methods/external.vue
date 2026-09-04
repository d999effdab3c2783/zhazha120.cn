<script lang="ts" setup>
	import { isNonNullish } from 'remeda'

	import type { ExternalSupportMethod } from '@/data/support'

	defineProps<ExternalSupportMethod>()
</script>

<template>
	<n-card :title="name" size="small">
		<custom-naive-ui-vertical-stack>
			<template v-if="isNonNullish(comment)">
				<n-alert type="info">
					<n-text class="whitespace-pre">{{ comment }}</n-text>
				</n-alert>
			</template>

			<n-element class="h-full relative">
				<n-element
					class="size-full absolute inset-0 transition-([opacity_background] duration-500 ease-in-out) opacity-0 hover:(bg-([#000000] opacity-50) opacity-100)"
				>
					<n-element class="absolute top-1/2 left-1/2 -translate-1/2">
						<custom-naive-ui-redirect-button
							:href="url"
							icon-class="i-ant-design:link-outlined"
							size="small"
							tag="a"
							type="primary"
						>
							{{ name }}
						</custom-naive-ui-redirect-button>
					</n-element>
				</n-element>

				<iframe :src="url" class="w-full min-h-240 border-none" />
			</n-element>
		</custom-naive-ui-vertical-stack>
	</n-card>
</template>