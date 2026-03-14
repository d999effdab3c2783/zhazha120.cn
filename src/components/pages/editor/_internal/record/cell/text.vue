<script lang="ts" setup>
import { NText } from 'naive-ui'

defineProps<{
	readonly value: string | number
}>()
</script>

<template>
	<n-text class="whitespace-pre-line">{{ value }}</n-text>
</template>