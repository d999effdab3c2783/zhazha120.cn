<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import { useZodRegistry } from "@/composables/database";
    import { isDesktop } from "@/shared/responsive";
    import { NCard, NDivider, NText } from "naive-ui";
    import { isNonNullish } from "remeda";
    import { z } from "zod";

    defineOptions({
        name: "SectionsGameMalodyV3Dan",
    });

    const {
        0: jack,
        1: tech,
        2: speed,
        3: stream,
    } = useZodRegistry(
        z.object({
            "game.records.malody.dan.v3.jack:0": z.string(),
            "game.records.malody.dan.v3.tech:1": z.string(),
            "game.records.malody.dan.v3.speed:2": z.string(),
            "game.records.malody.dan.v3.stream:3": z.string(),
        }),
    );
</script>

<template>
    <template
        v-if="
            isNonNullish(jack) || isNonNullish(tech) || isNonNullish(speed) || isNonNullish(stream)
        "
    >
        <n-card size="small" title="4 Key V3 段位">
            <custom-naive-auto-stack align="center" justify="space-evenly">
                <template v-if="isNonNullish(jack)">
                    <n-text class="text-sky-300 fw-bold">叠 (Jack): {{ jack }}</n-text>
                </template>

                <template v-if="isDesktop && isNonNullish(jack) && isNonNullish(tech)">
                    <n-divider vertical />
                </template>

                <template v-if="isNonNullish(tech)">
                    <n-text class="text-yellow-300 fw-bold">技 (Tech): {{ tech }}</n-text>
                </template>

                <template v-if="isDesktop && isNonNullish(tech) && isNonNullish(speed)">
                    <n-divider vertical />
                </template>

                <template v-if="isNonNullish(speed)">
                    <n-text class="text-red-300 fw-bold">乱/速度 (Speed): {{ speed }}</n-text>
                </template>

                <template v-if="isDesktop && isNonNullish(speed) && isNonNullish(stream)">
                    <n-divider vertical />
                </template>

                <template v-if="isNonNullish(stream)">
                    <n-text class="text-green-300 fw-bold">切 (Stream): {{ stream }}</n-text>
                </template>
            </custom-naive-auto-stack>
        </n-card>
    </template>
</template>