<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import { useZodRegistry } from "@/composables/database";
    import { isDesktop } from "@/shared/responsive";
    import { NCard, NDivider, NText } from "naive-ui";
    import { isNonNullish } from "remeda";
    import { z } from "zod";

    defineOptions({
        name: "SectionsGameOsuMania4KeyReformDan",
    });

    const {
        0: jack,
        1: technical,
        2: speed,
        3: stamina,
        4: long_note,
    } = useZodRegistry(
        z.object({
            "game.records.osu.mania.4k.reform_dan.jack:0": z.string(),
            "game.records.osu.mania.4k.reform_dan.technical:1": z.string(),
            "game.records.osu.mania.4k.reform_dan.speed:2": z.string(),
            "game.records.osu.mania.4k.reform_dan.stamina:3": z.string(),
            "game.records.osu.mania.4k.long_note_dan:4": z.number(),
        }),
    );
</script>

<template>
    <template
        v-if="
            isNonNullish(jack) ||
            isNonNullish(technical) ||
            isNonNullish(speed) ||
            isNonNullish(stamina) ||
            isNonNullish(long_note)
        "
    >
        <n-card size="small" title="Mania 4 Key">
            <custom-naive-auto-stack align="center" justify="space-evenly">
                <template v-if="isNonNullish(jack)">
                    <n-text class="text-sky-300 fw-bold">叠 (Jack): {{ jack }}</n-text>
                </template>

                <template v-if="isDesktop && isNonNullish(jack) && isNonNullish(technical)">
                    <n-divider vertical />
                </template>

                <template v-if="isNonNullish(technical)">
                    <n-text class="text-yellow-300 fw-bold">技 (Technical): {{ technical }}</n-text>
                </template>

                <template v-if="isDesktop && isNonNullish(technical) && isNonNullish(speed)">
                    <n-divider vertical />
                </template>

                <template v-if="isNonNullish(speed)">
                    <n-text class="text-red-300 fw-bold">乱/速度 (Speed): {{ speed }}</n-text>
                </template>

                <template v-if="isDesktop && isNonNullish(speed) && isNonNullish(stamina)">
                    <n-divider vertical />
                </template>

                <template v-if="isNonNullish(stamina)">
                    <n-text class="text-green-300 fw-bold">切/耐力 (Stamina): {{ stamina }}</n-text>
                </template>

                <template v-if="isDesktop && isNonNullish(stamina) && isNonNullish(long_note)">
                    <n-divider vertical />
                </template>

                <template v-if="isNonNullish(long_note)">
                    <n-text class="text-purple-300 fw-bold">面 (Long Note): {{ long_note }}</n-text>
                </template>
            </custom-naive-auto-stack>
        </n-card>
    </template>
</template>