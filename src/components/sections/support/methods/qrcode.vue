<script lang="ts" setup>
	import type { QrCodeSupportMethod } from '@/data/support';

	defineProps<QrCodeSupportMethod>();

	const containerRef = useTemplateRef('containerRef');
	const containerBounding = useElementBounding(containerRef);
</script>

<template>
	<n-card :title="name" size="small">
		<n-element ref="containerRef">
			<custom-naive-ui-position cover placement="center">
				<n-qr-code
					:size="containerBounding.width.value / 4"
					:value="content"
					class="box-content"
					type="svg"
					v-bind="props"
				/>
			</custom-naive-ui-position>
		</n-element>
	</n-card>
</template>