<script lang="ts" setup>
	const { isMobile } = useResponsive();
</script>

<template>
	<n-element class="min-h-screen relative">
		<n-element
			:class="[
				'pt-30 container mx-auto',
				{
					'px-2 pb-2': isMobile,
				},
			]"
		>
			<n-flex size="small" vertical>
				<n-divider dashed>
					<n-text class="text-8 fw-bold">杂项</n-text>
				</n-divider>

				<sections-index-2-misc-friend-links />
			</n-flex>
		</n-element>
	</n-element>
</template>