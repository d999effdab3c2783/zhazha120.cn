<script setup lang="ts">
	import { useBrowserLocation } from '@vueuse/core'
	import { clsx } from 'clsx'
	import { intersection, isNotNil, merge } from 'es-toolkit'
	import { computed } from 'vue'

	import { useResponsive } from '~/composables/responsive'
	import type { FriendWebsite } from '~/types/friend'

	const props = defineProps<{
		readonly item: FriendWebsite
	}>()

	const { isMobile } = useResponsive()
	const location = useBrowserLocation()

	const invalid = computed(() => {
		return isNotNil(props.item.tags) && intersection(props.item.tags, ['down', 'missing']).length > 0
	})

	const buttonClassNames = computed(() => {
		return clsx('text-start whitespace-pre-line', {
			'opacity-50': invalid.value
		})
	})

	const guessDomain = (href: string) => {
		return new URL(href).host
	}
</script>

<template>
	<n-card
		class="h-full"
		size="small"
	>
		<n-flex
			class="h-full"
			size="small"
			vertical
		>
			<n-flex
				align="center"
				size="small"
				:wrap="isMobile"
			>
				<n-image
					class="rounded h-20"
					:src="item.logo"
					@click.prevent.stop
				/>

				<n-flex
					align="center"
					class="w-full"
					justify="space-between"
					size="large"
				>
					<n-flex
						size="small"
						vertical
					>
						<n-flex
							align="start"
							class="leading-none !gap-1"
							:size="0"
							vertical
						>
							<n-text class="text-current">{{ item.name }}</n-text>

							<n-text
								class="text-[.8em] whitespace-pre-line"
								:depth="3"
							>
								{{ item.description }}
							</n-text>
						</n-flex>
					</n-flex>

					<n-text :depth="3">{{ guessDomain(item.href) }}</n-text>
				</n-flex>
			</n-flex>

			<n-element class="mt-auto">
				<n-flex
					class="n-button__patch"
					size="small"
					:vertical="isMobile"
				>
					<custom-redirect
						:href="item.href.replaceAll('{domain}', location.host ?? '')"
						:rel="invalid ? ['noreferrer', 'nofollow'] : []"
					>
						<template #default="{ aProps, redirect }">
							<n-button
								v-bind="
									merge(
										{
											block: true,
											class: buttonClassNames,
											secondary: true,
											size: 'small',
											tag: 'a',
											type: 'primary'
										},
										aProps
									)
								"
								@click.prevent="redirect"
							>
								<template #icon>
									<n-icon class="i-ant-design:link-outlined" />
								</template>

								访问
							</n-button>
						</template>

						<template #footer>
							<n-flex
								size="large"
								vertical
							>
								<n-flex
									align="center"
									justify="center"
									size="small"
								>
									<n-image
										class="rounded h-16"
										:src="item.logo"
									/>

									<n-flex
										align="start"
										class="leading-snug"
										:size="0"
										vertical
									>
										<n-text>{{ item.name }}</n-text>

										<n-text :depth="3">
											{{ item.description }}
										</n-text>
									</n-flex>
								</n-flex>

								<template v-if="isNotNil(item.tags)">
									<n-divider class="!my-0" />

									<sections-friends-websites-tags :item="item" />
								</template>
							</n-flex>
						</template>
					</custom-redirect>
				</n-flex>
			</n-element>
		</n-flex>
	</n-card>
</template>