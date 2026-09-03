<script lang="ts" setup>
	import { isNonNullish } from 'remeda';

	import type { EventEntry } from '@/data/furry/events';

	defineProps<EventEntry>();
</script>

<template>
	<n-card size="small">
		<template #cover>
			<n-image :src="banner" />
		</template>

		<n-element class="mt-2">
			<custom-naive-ui-auto-stack justify="space-between">
				<template v-if="isNonNullish(slug)">
					<custom-naive-ui-redirect-button :href="`/furry/events/${slug}`" tag="a" text type="primary">
						<custom-naive-ui-text-stack>
							<n-text class="text-(current [1.2em]) fw-bold">{{ name }}</n-text>
						</custom-naive-ui-text-stack>
					</custom-naive-ui-redirect-button>
				</template>

				<template v-else-if="isNonNullish(href)">
					<custom-naive-ui-redirect-button :href="href" tag="a" text type="primary">
						<custom-naive-ui-text-stack>
							<n-text class="text-(current [1.2em]) fw-bold">{{ fullName ?? name }}</n-text>
						</custom-naive-ui-text-stack>
					</custom-naive-ui-redirect-button>
				</template>

				<template v-else>
					<custom-naive-ui-text-stack class="leading-none">
						<n-text class="text-[1.2em]">{{ fullName ?? name }}</n-text>
					</custom-naive-ui-text-stack>
				</template>

				<n-text :depth="3" class="text-[.8em]">
					{{ new Date(startDate).toLocaleDateString() }}
					-
					{{ new Date(endDate).toLocaleDateString() }}
				</n-text>
			</custom-naive-ui-auto-stack>
		</n-element>
	</n-card>
</template>