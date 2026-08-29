<script lang="ts" setup>
	import { isNonNullish } from 'remeda';

	import type { ExternalSupportMethod } from '@/data/support';

	import CustomButton from '@/components/custom/naive-ui/button.vue';
	import CustomRedirectWrapper from '@/components/custom/redirect-wrapper.vue';

	defineProps<ExternalSupportMethod>();
</script>

<template>
	<n-card :title="name" size="small">
		<n-flex size="small" vertical>
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
						<custom-redirect-wrapper :href="url">
							<template #default="{ redirect, aProps }">
								<custom-button
									icon-class="i-ant-design:link-outlined"
									size="small"
									tag="a"
									type="primary"
									v-bind="aProps"
									@click.prevent="redirect"
								>
									{{ name }}
								</custom-button>
							</template>
						</custom-redirect-wrapper>
					</n-element>
				</n-element>

				<iframe :src="url" class="w-full min-h-240 border-none" />
			</n-element>
		</n-flex>
	</n-card>
</template>