<script setup lang="ts">
	import { useFooterStore } from '~/stores/footer'

	const footerStore = useFooterStore()
</script>

<template>
	<n-flex
		align="center"
		:size="0"
		vertical
	>
		<n-text> &copy; {{ footerStore.copyright.startYear }} - {{ footerStore.copyright.endYear }} </n-text>

		<n-text
			class="text-[.8em]"
			:depth="3"
		>
			{{ footerStore.copyright.comment }}
		</n-text>
	</n-flex>
</template>