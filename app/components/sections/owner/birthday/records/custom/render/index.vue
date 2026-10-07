<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import type { OwnerBirthdayRecordRenderable } from '~/types/owner'

	defineProps<{
		readonly items: OwnerBirthdayRecordRenderable[]
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
						<sections-owner-birthday-records-custom-render-item :item="item" />

						<template v-if="isNotNil(item.buttons)">
							<n-element class="owner-birthday-records-custom-buttons__patch">
								<sections-owner-birthday-records-custom-buttons :items="item.buttons" />
							</n-element>
						</template>

						<template v-if="isNotNil(item.comments)">
							<n-element class="text-center whitespace-pre-line">
								<custom-render-texts :items="item.comments" />
							</n-element>
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
	.owner-birthday-records-custom-buttons {
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