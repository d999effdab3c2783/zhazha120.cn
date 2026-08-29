<script lang="ts" setup>
	import Layout from '@/components/layouts/index.vue';
	import Loading from '@/components/spinkit/cube-rotate-scale.vue';
	import PageTransition from '@/components/transitions/page.vue';
</script>

<template>
	<Layout>
		<Suspense>
			<router-view>
				<template #default="{ Component: Page, route }">
					<PageTransition appear mode="out-in">
						<KeepAlive>
							<Component :is="Page" :key="route.path" />
						</KeepAlive>
					</PageTransition>
				</template>
			</router-view>

			<template #fallback>
				<Loading />
			</template>
		</Suspense>
	</Layout>
</template>

<style lang="scss">
	@use '@/styles/global';
</style>