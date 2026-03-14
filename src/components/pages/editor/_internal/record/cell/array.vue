<script lang="ts" setup>
import { NFlex, NText } from 'naive-ui'

defineProps<{
	readonly value: readonly unknown[]
}>()
</script>

<template>
	<n-flex size="small">
		<n-text :depth="3">[{{ value.length }}]</n-text>
		<n-text>{{ value.join(', ') }}</n-text>
	</n-flex>
</template>