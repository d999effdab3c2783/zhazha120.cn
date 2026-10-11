<script lang="ts" setup>
	import { useResponsive } from '~/composables/responsive'
	import { useFriendsStore } from '~/stores/friends'

	const friendsStore = useFriendsStore()

	const { isMobile } = useResponsive()

	await friendsStore.loadWebsites()
</script>

<template>
	<n-card
		size="small"
		title="朋友们"
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
				<n-statistic label="友情链接">
					{{ friendsStore.websites.length }}
					条
				</n-statistic>
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
					href="/friends"
				>
					<n-button
						block
						tag="a"
						type="primary"
						v-bind="aProps"
						@click.prevent="redirect"
					>
						<template #icon>
							<n-icon class="i-ant-design:contacts-outlined" />
						</template>

						了解更多
					</n-button>
				</custom-redirect>
			</n-flex>
		</template>
	</n-card>
</template>