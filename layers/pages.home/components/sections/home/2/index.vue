<script lang="ts" setup>
	const { isMobile } = useResponsive();

	const showSelfSection = ref(false);

	const handleSelfSectionClick = () => {
		showSelfSection.value = true;
	};
</script>

<template>
	<n-element class="container mx-auto min-h-screen">
		<n-flex :class="{ 'p-2': isMobile, 'py-10': !isMobile }" :size="0" align="center" vertical>
			<n-divider>本体</n-divider>

			<n-flex class="w-full" size="small">
				<SectionsHome2SelfDescription />
			</n-flex>

			<n-divider>开发</n-divider>

			<n-divider>福瑞</n-divider>

			<n-divider>杂项</n-divider>
		</n-flex>
	</n-element>
</template>