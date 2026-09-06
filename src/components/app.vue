<template>
	<sections-shared-suspense>
		<layouts>
			<router-view>
				<template #default="{ Component: Page, route }">
					<transitions-page appear mode="out-in">
						<KeepAlive>
							<Component :is="Page" :key="route.path" />
						</KeepAlive>
					</transitions-page>
				</template>
			</router-view>
		</layouts>
	</sections-shared-suspense>
</template>

<style lang="scss">
	@use '@/styles/global';
</style>