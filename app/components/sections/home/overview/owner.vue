<script lang="ts" setup>
	import { useResponsive } from '~/composables/responsive'

	const { isMobile } = useResponsive()
</script>

<template>
	<n-card
		class="h-fit"
		size="small"
		title="本体"
	>
		<n-text :depth="3">我就是我 没什么特别的</n-text>

		<template #footer>
			<n-flex
				class="n-button__patch"
				size="small"
				:vertical="isMobile"
			>
				<custom-redirect
					#="{ aProps, redirect }"
					href="/owner"
				>
					<n-button
						block
						tag="a"
						type="primary"
						v-bind="aProps"
						@click.prevent="redirect"
					>
						<template #icon>
							<n-icon class="i-ant-design:profile-outlined" />
						</template>

						了解更多
					</n-button>
				</custom-redirect>
			</n-flex>
		</template>
	</n-card>
</template>