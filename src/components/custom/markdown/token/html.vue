<script lang="ts" setup>
import type { Tokens } from 'marked'
import { NElement } from 'naive-ui'

defineProps<{
	readonly token: Tokens.Generic | Tokens.HTML
}>()
</script>

<template>
	<n-element v-html="token.raw"/>
</template>