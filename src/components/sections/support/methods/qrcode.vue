<script lang="ts" setup>
	import type { QrCodeSupportMethod } from '@/data/support.ts';

	defineProps<QrCodeSupportMethod>();

	const containerRef = useTemplateRef('containerRef');
	const containerBounding = useElementBounding(containerRef);
</script>

<template>
	<n-card :title="name" size="small">
		<n-element ref="containerRef">
			<n-flex justify="center">
				<n-qr-code
					:size="containerBounding.width.value / 4"
					:value="content"
					class="box-content"
					type="svg"
					v-bind="props"
				/>
			</n-flex>
		</n-element>
	</n-card>
</template>