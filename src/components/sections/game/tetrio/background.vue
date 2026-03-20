<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import { useZodRegistry } from "@/composables/database";
    import { NCard, NElement, NImage } from "naive-ui";
    import { isNonNullish } from "remeda";
    import { z } from "zod";

    defineOptions({
        name: "SectionsGameTetrioBackground",
    });

    const { 0: background, 1: overlay } = useZodRegistry(
        z.object({
            "game.records.tetrio.game_background:0": z.string().describe("file"),
            "game.records.tetrio.game_background.overlay:1": z.string().describe("file"),
        }),
    );
</script>

<template>
    <template v-if="isNonNullish(background)">
        <n-card size="small" title="背景">
            <n-element class="relative">
                <n-image :src="background" class="w-full opacity-50" />

                <template v-if="isNonNullish(overlay)">
                    <n-image
                        :src="overlay"
                        class="w-1/2 absolute top-1/2 left-1/2 -translate-1/2"
                    />
                </template>
            </n-element>

            <template #action>
                <custom-naive-auto-stack>
                    <custom-redirect :href="background">
                        <custom-naive-button icon="i-ant-design:download-outlined"
                            >下载</custom-naive-button
                        >
                    </custom-redirect>
                </custom-naive-auto-stack>
            </template>
        </n-card>
    </template>
</template>