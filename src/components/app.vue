<script lang="ts" setup>
	const loadingStore = useLoadingStore()
</script>

<template>
	<layouts-wrapper>
		<n-element>
			<sections-global-api-injector />
			<sections-global-route-loading />

			<transitions-fade appear mode="out-in">
				<template v-if="loadingStore.status">
					<spinkit-cube-rotate-scale />
				</template>
			</transitions-fade>

			<sections-shared-suspense>
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