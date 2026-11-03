<script setup lang="ts">
	import { NElement, NFlex, NSpin, NText } from 'naive-ui'
</script>

<template>
	<n-element class="grid h-screen place-items-center">
		<n-flex
			size="large"
			vertical
		>
			<n-spin size="large" />

			<n-element class="text-[1.5em]">
				<n-text strong>加载中</n-text>
			</n-element>
		</n-flex>
	</n-element>
</template>