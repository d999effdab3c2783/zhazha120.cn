<script setup lang="ts">
	import { useFooterStore } from '~/stores/footer'

	const footerStore = useFooterStore()
</script>

<template>
	<n-text>&copy; {{ footerStore.copyright.startYear }} - {{ footerStore.copyright.endYear }}</n-text>
</template>