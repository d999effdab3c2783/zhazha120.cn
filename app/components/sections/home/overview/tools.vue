<script lang="ts" setup>
	import { useResponsive } from '~/composables/responsive'
	import { useToolsStore } from '~/stores/tools'

	const toolsStore = useToolsStore()

	const { isMobile } = useResponsive()
</script>

<template>
	<n-card
		size="small"
		title="在线工具"
	>
		<n-flex
			size="small"
			vertical
		>
			<n-divider class="!my-0" />

			<n-flex
				align="center"
				size="large"
				:vertical="isMobile"
			>
				<n-statistic>
					{{ toolsStore.portals.length }}
					个
				</n-statistic>
			</n-flex>

			<n-flex
				align="center"
				class="mt-4"
				:justify="isMobile ? 'center' : undefined"
				size="small"
				:vertical="isMobile"
			>
				<template
					v-for="({ name }, index) in toolsStore.portals"
					:key="index"
				>
					<n-tag>{{ name }}</n-tag>
				</template>
			</n-flex>
		</n-flex>

		<template #footer>
			<n-flex
				class="n-button__patch"
				size="small"
				:vertical="isMobile"
			>
				<custom-redirect
					#="{ aProps, redirect }"
					href="/tools"
				>
					<n-button
						block
						tag="a"
						type="primary"
						v-bind="aProps"
						@click.prevent="redirect"
					>
						<template #icon>
							<n-icon class="i-ant-design:tool-outlined" />
						</template>

						了解更多
					</n-button>
				</custom-redirect>
			</n-flex>
		</template>
	</n-card>
</template>