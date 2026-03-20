<script lang="ts" setup>
    import LayoutsSubPage from "@/components/layouts/sub-page.vue";
    import SectionsMarkdownRenderer from "@/components/sections/markdown/renderer.vue";
    import config from "@/config/markdown";
    import { xor } from "@/utils/cipher";
    import { useRouteQuery } from "@vueuse/router";
    import { Base64 } from "js-base64";
    import { NCard, NInput } from "naive-ui";
    import { isNullish } from "remeda";

    const url = useRouteQuery<string | undefined>("_", undefined, {
        transform: {
            get: (value) => {
                if (isNullish(value)) {
                    return;
                }

                return xor(Base64.decode(value), config.key);
            },
            set: (value) => {
                if (isNullish(value)) {
                    return;
                }

                return Base64.encode(xor(value, config.key));
            },
        },
    });
</script>

<template>
    <layouts-sub-page>
        <n-card size="small">
            <n-input v-model:value="url" />
        </n-card>

        <n-card size="small">
            <sections-markdown-renderer :url="url" />
        </n-card>
    </layouts-sub-page>
</template>