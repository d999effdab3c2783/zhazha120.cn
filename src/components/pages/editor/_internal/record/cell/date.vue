<script lang="ts" setup>
import { formatDate } from '@/utils/date'
import { NText } from 'naive-ui'

defineProps<{
	readonly value: string
}>()
</script>

<template>
	<n-text>{{ formatDate(value) }}</n-text>
</template>