<script lang="ts" setup>
    import CustomMarkdownBlockquoteToken from "@/components/custom/markdown/token/blockquote.vue";
    import CustomMarkdownBrToken from "@/components/custom/markdown/token/br.vue";
    import CustomMarkdownCodeToken from "@/components/custom/markdown/token/code.vue";
    import CustomMarkdownCodespanToken from "@/components/custom/markdown/token/codespan.vue";
    import CustomMarkdownHeadingToken from "@/components/custom/markdown/token/heading.vue";
    import CustomMarkdownHrToken from "@/components/custom/markdown/token/hr.vue";
    import CustomMarkdownHtmlToken from "@/components/custom/markdown/token/html.vue";
    import CustomMarkdownImageToken from "@/components/custom/markdown/token/image.vue";
    import CustomMarkdownLinkToken from "@/components/custom/markdown/token/link.vue";
    import CustomMarkdownParagraphToken from "@/components/custom/markdown/token/paragraph.vue";
    import CustomMarkdownSpaceToken from "@/components/custom/markdown/token/space.vue";
    import CustomMarkdownStrongToken from "@/components/custom/markdown/token/strong.vue";
    import CustomMarkdownTextToken from "@/components/custom/markdown/token/text.vue";
    import type { Token } from "marked";

    defineProps<{
        readonly token: Token;
    }>();
</script>

<template>
    <template v-if="token.type === 'html'">
        <custom-markdown-html-token :token="token" />
    </template>

    <template v-if="token.type === 'br'">
        <custom-markdown-br-token :token="token" />
    </template>

    <template v-if="token.type === 'space'">
        <custom-markdown-space-token :token="token" />
    </template>

    <template v-if="token.type === 'text'">
        <custom-markdown-text-token :token="token" />
    </template>

    <template v-if="token.type === 'heading'">
        <custom-markdown-heading-token :token="token" />
    </template>

    <template v-if="token.type === 'code'">
        <custom-markdown-code-token :token="token" />
    </template>

    <template v-if="token.type === 'hr'">
        <custom-markdown-hr-token :token="token" />
    </template>

    <template v-if="token.type === 'paragraph'">
        <custom-markdown-paragraph-token :token="token" />
    </template>

    <template v-if="token.type === 'strong'">
        <custom-markdown-strong-token :token="token" />
    </template>

    <template v-if="token.type === 'blockquote'">
        <custom-markdown-blockquote-token :token="token" />
    </template>

    <template v-if="token.type === 'codespan'">
        <custom-markdown-codespan-token :token="token" />
    </template>

    <template v-if="token.type === 'link'">
        <custom-markdown-link-token :token="token" />
    </template>

    <template v-if="token.type === 'image'">
        <custom-markdown-image-token :token="token" />
    </template>
</template>