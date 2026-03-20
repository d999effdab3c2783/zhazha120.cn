<script lang="ts" setup>
    import CustomMarkdownCodeVueTemplateToken from "@/components/custom/markdown/token/code-vue-template.vue";
    import type { Tokens } from "marked";
    import { NCode } from "naive-ui";

    defineProps<{
        readonly token: Tokens.Generic | Tokens.Code;
    }>();
</script>

<template>
    <template v-if="token.lang === 'vue template'">
        <custom-markdown-code-vue-template-token :token="token" />
    </template>

    <template v-else>
        <n-code :code="token.text" :language="token.lang" show-line-numbers />
    </template>
</template>