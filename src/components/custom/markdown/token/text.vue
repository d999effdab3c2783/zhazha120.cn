<script lang="ts" setup>
import CustomMarkdownCirculateToken from '@/components/custom/markdown/token/circulate.vue'
import type { Tokens } from 'marked'
import { NText } from 'naive-ui'

defineProps<{
	readonly token: Tokens.Generic | Tokens.Text
}>()
</script>

<template>
	<n-text>
		<custom-markdown-circulate-token :token="token"/>
	</n-text>
</template>