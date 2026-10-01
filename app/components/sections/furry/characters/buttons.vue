<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import { useResponsive } from '~/composables/responsive'
	import type { FurryCharacterEntry } from '~/types/furry'

	defineProps<{
		readonly item: FurryCharacterEntry
	}>()

	const { isMobile } = useResponsive()

	const generateDetailLink = (slug: string) => {
		return `/furry/characters/${slug}`
	}
</script>

<template>
	<n-flex
		:align="!isMobile ? 'center' : undefined"
		class="mt-4"
		size="small"
		:vertical="isMobile"
	>
		<slot name="detail">
			<n-element class="flex-1">
				<template v-if="isNotNil(item.slug)">
					<n-element class="mt-auto self-end">
						<custom-redirect
							#="{ aProps, redirect }"
							:href="generateDetailLink(item.slug)"
						>
							<n-button
								v-bind="aProps"
								block
								tag="a"
								type="primary"
								@click.prevent="redirect"
							>
								<template #icon>
									<n-icon class="i-ant-design:profile-outlined" />
								</template>

								了解更多
							</n-button>
						</custom-redirect>
					</n-element>
				</template>
			</n-element>
		</slot>
	</n-flex>
</template>