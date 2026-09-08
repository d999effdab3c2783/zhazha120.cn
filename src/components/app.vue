<script lang="ts" setup>
	const loadingStore = useLoadingStore()
</script>

<template>
	<layouts-wrapper>
		<n-element>
			<transitions-fade appear mode="out-in">
				<template v-if="loadingStore.status">
					<n-element class="fixed size-screen inset-0 z-120">
						<custom-naive-ui-position cover placement="center">
							<n-spin size="large" />
						</custom-naive-ui-position>
					</n-element>
				</template>
			</transitions-fade>

			<sections-shared-suspense>
				<sections-global-api-injector />
				<sections-global-route-loading />

				<layouts>
					<router-view>
						<template #default="{ Component: page }">
							<transitions-page appear mode="out-in">
								<Component :is="page" />
							</transitions-page>
						</template>
					</router-view>
				</layouts>
			</sections-shared-suspense>
		</n-element>
	</layouts-wrapper>
</template>

<style lang="scss">
	@use '@/styles/global';
</style>