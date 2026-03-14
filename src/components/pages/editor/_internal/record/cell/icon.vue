<script lang="ts" setup>
import { NIcon } from 'naive-ui'

defineProps<{
	readonly value: string
}>()
</script>

<template>
	<n-icon :class="value" class="size-12"/>
</template>