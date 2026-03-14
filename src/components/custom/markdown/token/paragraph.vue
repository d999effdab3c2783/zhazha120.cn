<script lang="ts" setup>
import CustomMarkdownCirculateToken from '@/components/custom/markdown/token/circulate.vue'
import type { Tokens } from 'marked'
import { NP } from 'naive-ui'

defineProps<{
	readonly token: Tokens.Generic | Tokens.Paragraph
}>()
</script>

<template>
	<n-p>
		<custom-markdown-circulate-token :token="token"/>
	</n-p>
</template>