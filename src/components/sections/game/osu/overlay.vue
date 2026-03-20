<script lang="ts" setup>
    import { useZodRegistry } from "@/composables/database";
    import { NImage } from "naive-ui";
    import { isNonNullish } from "remeda";
    import { z } from "zod";

    defineOptions({
        name: "SectionsGameOsuOverlay",
    });

    const { 0: url } = useZodRegistry(
        z.object({
            "game.records.osu.overlay_url:0": z.string(),
        }),
    );
</script>

<template>
    <template v-if="isNonNullish(url)">
        <n-image :img-props="{ class: 'w-full' }" :src="url" />
    </template>
</template>