<script lang="ts" setup>
	import { isNonNullish } from 'remeda'

	import type { EventEntry } from '@/data/furry/events'

	const props = defineProps<EventEntry>()

	const { isMobile } = useResponsive()

	const detailRoutePath = computed(() => {
		if (isNonNullish(props.slug) && isNonNullish(props.year)) {
			return `/furry/events/${props.slug}/${props.year}`
		}
	})
</script>

<template>
	<n-card size="small">
		<template #cover>
			<n-image :src="banner" />
		</template>

		<n-element class="mt-2">
			<custom-naive-ui-auto-stack justify="space-between">
				<template v-if="isNonNullish(slug) && isNonNullish(detailRoutePath) && $route.path !== detailRoutePath">
					<custom-naive-ui-redirect-button
						:href="detailRoutePath"
						class="size-fit"
						tag="a"
						text
						type="primary"
					>
						<custom-naive-ui-text-stack>
							<custom-naive-ui-auto-stack :align="isMobile ? undefined : 'center'">
								<template v-if="isNonNullish(year)">
									<n-text>{{ year }}</n-text>
								</template>

								<custom-naive-ui-text-stack class="leading-tight">
									<n-text class="text-(current [1.2em]) fw-bold">{{ name }}</n-text>

									<template v-if="isNonNullish(slug)">
										<n-text :depth="3">{{ slug }}</n-text>
									</template>
								</custom-naive-ui-text-stack>
							</custom-naive-ui-auto-stack>
						</custom-naive-ui-text-stack>
					</custom-naive-ui-redirect-button>
				</template>

				<template v-else-if="isNonNullish(href)">
					<custom-naive-ui-redirect-button :href="href" class="size-fit" tag="a" text type="primary">
						<custom-naive-ui-text-stack>
							<custom-naive-ui-auto-stack :align="isMobile ? undefined : 'center'">
								<template v-if="isNonNullish(year)">
									<n-text>{{ year }}</n-text>
								</template>

								<custom-naive-ui-text-stack class="leading-tight">
									<n-text class="text-(current [1.2em]) fw-bold">{{ fullName ?? name }}</n-text>

									<template v-if="isNonNullish(slug)">
										<n-text :depth="3">{{ slug }}</n-text>
									</template>
								</custom-naive-ui-text-stack>
							</custom-naive-ui-auto-stack>
						</custom-naive-ui-text-stack>
					</custom-naive-ui-redirect-button>
				</template>

				<template v-else>
					<custom-naive-ui-text-stack>
						<custom-naive-ui-auto-stack :align="isMobile ? undefined : 'center'">
							<template v-if="isNonNullish(year)">
								<n-text>{{ year }}</n-text>
							</template>

							<custom-naive-ui-text-stack class="leading-tight">
								<n-text class="text-[1.2em]">{{ name }}</n-text>

								<template v-if="isNonNullish(slug)">
									<n-text :depth="3">{{ slug }}</n-text>
								</template>
							</custom-naive-ui-text-stack>
						</custom-naive-ui-auto-stack>
					</custom-naive-ui-text-stack>
				</template>

				<custom-naive-ui-position placement="center-right">
					<n-text :depth="3" class="text-[.8em]">
						{{ new Date(startDate).toLocaleDateString() }}
						-
						{{ new Date(endDate).toLocaleDateString() }}
					</n-text>
				</custom-naive-ui-position>
			</custom-naive-ui-auto-stack>
		</n-element>
	</n-card>
</template>