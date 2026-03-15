<script lang="ts" setup>
import { usePublicAssets } from '@/composables/assets'
import type { Tokens } from 'marked'
import { NImage } from 'naive-ui'

defineProps<{
	readonly token: Tokens.Generic | Tokens.Image
}>()

const publicAssets = usePublicAssets()
</script>

<template>
	<n-image :alt="token.text" :src="publicAssets[token.href].value ?? token.href"/>
</template>