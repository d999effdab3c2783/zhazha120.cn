<script lang="ts" setup>
	import Layout from '@/components/layouts/index.vue';
	import PageTransition from '@/components/transitions/page.vue';
</script>

<template>
	<Layout>
		<router-view>
			<template #default="{ Component: Page, route }">
				<PageTransition appear mode="out-in">
					<KeepAlive>
						<Component :is="Page" :key="route.fullPath" />
					</KeepAlive>
				</PageTransition>
			</template>
		</router-view>
	</Layout>
</template>

<style lang="scss">
	@use '@/styles/global';
</style>