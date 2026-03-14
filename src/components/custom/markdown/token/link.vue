<script lang="ts" setup>
import CustomMarkdownCirculateToken from '@/components/custom/markdown/token/circulate.vue'
import CustomRedirect from '@/components/custom/redirect.vue'
import type { Tokens } from 'marked'

defineProps<{
	readonly token: Tokens.Generic | Tokens.Link
}>()
</script>

<template>
	<custom-redirect :href="token.href">
		<custom-markdown-circulate-token :token="token"/>
	</custom-redirect>
</template>