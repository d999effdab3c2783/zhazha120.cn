<script lang="ts" setup>
import type { Tokens } from 'marked'
import { NHr } from 'naive-ui'

defineProps<{
	readonly token: Tokens.Generic | Tokens.Hr
}>()
</script>

<template>
	<n-hr/>
</template>