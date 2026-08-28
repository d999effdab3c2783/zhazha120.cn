<script lang="ts" setup>
	import DefaultLayout from '@/components/layouts/default.vue';

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
	<DefaultLayout>
		<n-element class="min-h-screen relative">
			<n-element
				:class="[
					'container mx-auto',
					{
						'p-2': isMobile,
					},
					{
						'pt-10': !isMobile,
					},
				]"
			>
				<n-flex size="large" vertical>
					<n-page-header :title="String($route.meta.title ?? $route.fullPath)" @back="handleBack" />

					<n-element>
						<slot />
					</n-element>
				</n-flex>
			</n-element>
		</n-element>
	</DefaultLayout>
</template>