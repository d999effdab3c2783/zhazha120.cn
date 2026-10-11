<script lang="ts" setup>
	import { sumBy } from 'es-toolkit'

	import { useResponsive } from '~/composables/responsive'
	import { useDevStore } from '~/stores/dev'

	const devStore = useDevStore()

	const { isMobile } = useResponsive()

	await devStore.loadStacks()
	await devStore.loadOrganizations()
</script>

<template>
	<n-card
		size="small"
		title="开发"
	>
		<n-flex
			size="small"
			vertical
		>
			<n-divider class="!mt-0" />

			<n-flex
				align="center"
				size="large"
				:vertical="isMobile"
			>
				<n-statistic label="会的技术栈">
					{{
						sumBy(devStore.stacks, item => {
							return item.items.length
						})
					}}
					个
				</n-statistic>

				<template v-if="!isMobile">
					<n-divider vertical />
				</template>

				<n-statistic label="加入的组织">{{ devStore.organizations.length }} 个</n-statistic>

				<template v-if="!isMobile">
					<n-divider vertical />
				</template>

				<n-statistic label="做过的项目">{{ devStore.projects.length }} 个</n-statistic>

				<template v-if="!isMobile">
					<n-divider vertical />
				</template>

				<n-statistic label="打过的比赛">{{ devStore.competitions.length }} 场</n-statistic>
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
					href="/dev"
				>
					<n-button
						block
						tag="a"
						type="primary"
						v-bind="aProps"
						@click.prevent="redirect"
					>
						<template #icon>
							<n-icon class="i-ant-design:code-outlined" />
						</template>

						了解更多
					</n-button>
				</custom-redirect>
			</n-flex>
		</template>
	</n-card>
</template>