<script lang="ts" setup>
import CustomMarkdownCirculateToken from '@/components/custom/markdown/token/circulate.vue'
import type { Tokens } from 'marked'
import { NText } from 'naive-ui'

defineProps<{
	readonly token: Tokens.Generic | Tokens.Strong
}>()
</script>

<template>
	<n-text class="fw-bold">
		<custom-markdown-circulate-token :token="token"/>
	</n-text>
</template>