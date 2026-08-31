<script lang="ts" setup>
	const { isMobile } = useResponsive();
	const router = useRouter();

	const handleBack = () => {
		if (history.length <= 1) {
			router.push('/');
			return;
		}

		router.back();
	};
</script>

<template>
	<layouts-default>
		<n-element class="min-h-screen relative">
			<n-element
				:class="[
					'container mx-auto px-2 pb-2',
					{
						'pt-5': isMobile,
					},
					{
						'pt-10': !isMobile,
					},
				]"
			>
				<custom-naive-ui-vertical-stack size="large">
					<n-page-header :title="String($route.meta.title ?? $route.fullPath)" @back="handleBack" />

					<n-element>
						<slot />
					</n-element>
				</custom-naive-ui-vertical-stack>
			</n-element>
		</n-element>
	</layouts-default>
</template>