<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import { useResponsive } from '~/composables/responsive'
	import type { FriendEntry } from '~/types/friend'

	defineProps<{
		readonly item: FriendEntry
	}>()

	const { isMobile } = useResponsive()

	const generateDetailLink = (slug: string) => {
		return `/friends/${slug}`
	}
</script>

<template>
	<n-flex
		:align="!isMobile ? 'center' : undefined"
		class="n-button__patch mt-4"
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

<style lang="scss">
	@use '~/styles/patches';
</style>