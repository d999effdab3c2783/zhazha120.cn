<script lang="ts" setup>
    import { usePublicAssets } from "@/composables/assets";
    import type { Tokens } from "marked";
    import { NImage } from "naive-ui";

    const props = defineProps<{
        readonly token: Tokens.Generic | Tokens.Image;
    }>();

    const publicAssets = usePublicAssets();

    const src = publicAssets.find(props.token.href, props.token.href);
</script>

<template>
    <n-image :alt="token.text" :src="src" />
</template>