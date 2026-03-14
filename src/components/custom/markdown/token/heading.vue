<script lang="ts" setup>
import CustomMarkdownCirculateToken from '@/components/custom/markdown/token/circulate.vue'
import type { Tokens } from 'marked'
import { NH1, NH2, NH3, NH4, NH5, NH6 } from 'naive-ui'

defineProps<{
	readonly token: Tokens.Generic | Tokens.Heading
}>()
</script>

<template>
	<template v-if="token.depth === 1">
		<n-h1>
			<custom-markdown-circulate-token :token="token"/>
		</n-h1>
	</template>

	<template v-if="token.depth === 2">
		<n-h2>
			<custom-markdown-circulate-token :token="token"/>
		</n-h2>
	</template>

	<template v-if="token.depth === 3">
		<n-h3>
			<custom-markdown-circulate-token :token="token"/>
		</n-h3>
	</template>

	<template v-if="token.depth === 4">
		<n-h4>
			<custom-markdown-circulate-token :token="token"/>
		</n-h4>
	</template>

	<template v-if="token.depth === 5">
		<n-h5>
			<custom-markdown-circulate-token :token="token"/>
		</n-h5>
	</template>

	<template v-if="token.depth === 6">
		<n-h6>
			<custom-markdown-circulate-token :token="token"/>
		</n-h6>
	</template>
</template>