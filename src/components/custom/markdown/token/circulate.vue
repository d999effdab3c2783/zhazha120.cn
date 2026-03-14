<script lang="ts" setup>
import CustomMarkdownToken from '@/components/custom/markdown/token/index.vue'
import type { Tokens } from 'marked'
import { isNonNullish } from 'remeda'

defineProps<{
	readonly token: Tokens.Generic
}>()
</script>

<template>
	<template v-if="isNonNullish(token.tokens)">
		<template v-for="sub_token in token.tokens">
			<custom-markdown-token :token="sub_token"/>
		</template>
	</template>

	<template v-else>
		<slot name="fallback">{{ token.text }}</slot>
	</template>
</template>