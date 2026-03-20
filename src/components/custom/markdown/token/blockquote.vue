<script lang="ts" setup>
    import CustomMarkdownCirculateToken from "@/components/custom/markdown/token/circulate.vue";
    import type { Tokens } from "marked";
    import { NBlockquote } from "naive-ui";

    defineProps<{
        readonly token: Tokens.Generic | Tokens.Blockquote;
    }>();
</script>

<template>
    <n-blockquote>
        <custom-markdown-circulate-token :token="token" />
    </n-blockquote>
</template>