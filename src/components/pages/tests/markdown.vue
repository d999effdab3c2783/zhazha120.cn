<script lang="ts" setup>
    import raw from "@/assets/contents/test.md?raw";
    import CustomMarkdown from "@/components/custom/markdown/index.vue";
    import LayoutsSubPage from "@/components/layouts/sub-page.vue";
    import { NCard, NCode } from "naive-ui";
</script>

<template>
    <layouts-sub-page>
        <n-card size="small" title="raw">
            <n-code :code="raw" language="markdown" show-line-numbers />
        </n-card>

        <custom-markdown :raw="raw" />
    </layouts-sub-page>
</template>