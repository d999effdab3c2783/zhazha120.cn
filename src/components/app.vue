<script lang="ts" setup>
	const loadingStore = useLoadingStore()
</script>

<template>
	<layouts-wrapper>
		<n-element>
			<transitions-fade appear mode="out-in">
				<template v-if="loadingStore.status">
					<spinkit-cube-rotate-scale />
				</template>
			</transitions-fade>

			<sections-shared-suspense>
				<router-view>
					<template #default="{ Component: page }">
						<layouts>
							<transitions-page appear mode="out-in">
								<Component :is="page" />
							</transitions-page>
						</layouts>
					</template>
				</router-view>
			</sections-shared-suspense>
		</n-element>
	</layouts-wrapper>
</template>

<style lang="scss">
	@use '@/styles/global';
</style>