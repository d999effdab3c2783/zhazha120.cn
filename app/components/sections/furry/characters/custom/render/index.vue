<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import type { FurryCharacterRenderable } from '~/types/furry'

	defineProps<{
		readonly items: FurryCharacterRenderable[]
	}>()
</script>

<template>
	<template
		v-for="({ title, items: itemItems }, index) in items"
		:key="index"
	>
		<n-card
			size="small"
			:title="title"
		>
			<n-flex
				size="large"
				vertical
			>
				<template
					v-for="(item, itemIndex) in itemItems"
					:key="itemIndex"
				>
					<n-flex
						align="center"
						size="small"
						vertical
					>
						<sections-furry-characters-custom-render-item :item="item" />

						<template v-if="isNotNil(item.buttons)">
							<n-element class="furry-characters-custom-buttons__patch">
								<sections-furry-characters-custom-buttons :items="item.buttons" />
							</n-element>
						</template>

						<template v-if="isNotNil(item.comment)">
							<n-text :depth="3">{{ item.comment }}</n-text>
						</template>
					</n-flex>

					<template v-if="itemIndex !== itemItems.length - 1">
						<n-divider
							class="!my-4"
							dashed
						/>
					</template>
				</template>
			</n-flex>
		</n-card>
	</template>
</template>

<style scoped lang="scss">
	.furry-characters-custom-buttons {
		&__patch {
			& .n-card {
				@apply contents;
			}

			& :deep(.n-card-header) {
				@apply hidden;
			}

			& :deep(.n-card-content) {
				@apply \!p-0;
			}
		}
	}
</style>