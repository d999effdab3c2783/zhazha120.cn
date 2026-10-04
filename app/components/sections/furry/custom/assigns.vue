<script setup lang="ts">
	import { defaultTo } from 'es-toolkit/compat'

	import { useResponsive } from '~/composables/responsive'
	import type { FurryAssign } from '~/types/furry'

	defineProps<{
		readonly items: FurryAssign[]
	}>()

	const { isMobile } = useResponsive()
</script>

<template>
	<n-card
		size="small"
		title="关联"
	>
		<n-flex
			align="center"
			justify="space-evenly"
			size="large"
			:vertical="isMobile"
		>
			<template
				v-for="({ name, role, links }, index) in items"
				:key="index"
			>
				<n-flex
					align="center"
					:size="0"
					vertical
				>
					<n-text>{{ name }}</n-text>
					<n-text :depth="3">{{ role }}</n-text>

					<n-flex
						class="mt-4"
						size="small"
						vertical
					>
						<template
							v-for="({ icon, name: linkName, href }, linkIndex) in links"
							:key="linkIndex"
						>
							<custom-redirect
								#="{ aProps, redirect }"
								:href="href"
							>
								<n-button
									v-bind="aProps"
									class="w-fit"
									tag="a"
									@click.prevent="redirect"
								>
									<template #icon>
										<n-icon :class="defaultTo(icon, 'i-ant-design:link-outlined')" />
									</template>

									{{ linkName }}
								</n-button>
							</custom-redirect>
						</template>
					</n-flex>
				</n-flex>

				<template v-if="index !== items.length - 1">
					<n-divider
						class="!my-4"
						dashed
						:vertical="!isMobile"
					/>
				</template>
			</template>
		</n-flex>
	</n-card>
</template>