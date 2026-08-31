<template>
	<layouts>
		<Suspense>
			<router-view>
				<template #default="{ Component: Page, route }">
					<transitions-page appear mode="out-in">
						<KeepAlive>
							<Component :is="Page" :key="route.path" />
						</KeepAlive>
					</transitions-page>
				</template>
			</router-view>

			<template #fallback>
				<spinkit-cube-rotate-scale />
			</template>
		</Suspense>
	</layouts>
</template>

<style lang="scss">
	@use '@/styles/global';
</style>