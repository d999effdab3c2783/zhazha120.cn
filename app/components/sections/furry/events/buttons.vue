<script setup lang="ts">
	import { isNotNil } from 'es-toolkit'

	import { useResponsive } from '~/composables/responsive'
	import type { FurryEventEntry } from '~/types/furry'

	defineProps<{
		readonly item: FurryEventEntry
	}>()

	const { isMobile } = useResponsive()

	const generateDetailLink = (slug: string, year: number) => {
		return `/furry/events/${slug}/${year}`
	}
</script>

<template>
	<n-flex
		:align="!isMobile ? 'center' : undefined"
		class="mt-4"
		size="small"
		:vertical="isMobile"
	>
		<slot name="href">
			<template v-if="isNotNil(item.href)">
				<n-element class="flex-1">
					<custom-redirect
						#="{ aProps, redirect }"
						:href="item.href"
					>
						<n-button
							block
							v-bind="aProps"
							tag="a"
							@click.prevent="redirect"
						>
							<template #icon>
								<n-icon class="i-ant-design:link-outlined" />
							</template>

							官方网站
						</n-button>
					</custom-redirect>
				</n-element>
			</template>
		</slot>

		<slot name="detail">
			<template v-if="isNotNil(item.slug) && isNotNil(item.year)">
				<n-element class="flex-1">
					<custom-redirect
						#="{ aProps, redirect }"
						:href="generateDetailLink(item.slug, item.year)"
					>
						<n-button
							block
							v-bind="aProps"
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
		</slot>
	</n-flex>
</template>