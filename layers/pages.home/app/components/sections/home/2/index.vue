<script lang="ts" setup>
	const { isMobile } = useResponsive();
</script>

<template>
	<n-element :class="['container mx-auto min-h-screen', { 'p-2': isMobile, 'py-10': !isMobile }]">
		<n-flex :size="0" align="center" vertical>
			<n-divider>本体</n-divider>

			<n-flex vertical size="small" inline class="w-full">
				<SectionsHome2SelfDescription />
				<SectionsHome2SelfContacts />
			</n-flex>

			<n-divider>开发</n-divider>

			<n-divider>福瑞</n-divider>

			<n-divider>杂项</n-divider>
		</n-flex>
	</n-element>
</template>