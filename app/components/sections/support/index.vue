<script setup lang="ts">
	import { useSupportStore } from '~/stores/support'

	const supportStore = useSupportStore()
</script>

<template>
	<n-flex
		size="small"
		vertical
	>
		<slot name="channels">
			<sections-support-channels :items="supportStore.channels" />
		</slot>
	</n-flex>
</template>