<script lang="ts" setup>
    import CustomNaiveHorizontalStack from "@/components/custom/naive/horizontal-stack.vue";
    import CustomNaivePosition from "@/components/custom/naive/position.vue";
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import SectionsGameMaimaiBest50Item from "@/components/sections/game/maimai/best50/item.vue";
    import { useZodRegistry } from "@/composables/database";
    import { alova } from "@/shared/alova";
    import { isMobile } from "@/shared/responsive";
    import type { Data } from "@/types/components/game/maimai/diving-fish-best50";
    import { useAsyncState } from "@vueuse/core";
    import { NCard, NDivider, NGrid, NGridItem, NResult, NSpin, NTag, NText } from "naive-ui";
    import { isNonNullish, isNullish, prop, sumBy } from "remeda";
    import { watch } from "vue";
    import { z } from "zod";

    defineOptions({
        name: "SectionsGameMaimaiBest50",
    });

    const { 0: username } = useZodRegistry(
        z.object({
            "game.records.maimai.diving-fish.username:0": z.string(),
        }),
    );

    const {
        isLoading,
        state: data,
        execute,
        error,
    } = useAsyncState(
        async () => {
            if (isNullish(username.value)) {
                return;
            }

            const result: Data = await (
                await alova
                    .Post<Response>("https://www.diving-fish.com/api/maimaidxprober/query/player", {
                        b50: true,
                        username: username.value,
                    })
                    .send()
            ).json();

            return result;
        },
        undefined,
        {
            immediate: false,
        },
    );

    watch(username, async () => {
        await execute();
    });
</script>

<template>
    <template v-if="isNonNullish(username)">
        <n-card size="small" title="Best 50">
            <template v-if="isLoading">
                <custom-naive-position placement="center">
                    <n-spin />
                </custom-naive-position>
            </template>

            <template v-else>
                <template v-if="isNonNullish(error)">
                    <n-result status="error" title="加载失败" />
                </template>

                <template v-else>
                    <template v-if="isNonNullish(data)">
                        <custom-naive-vertical-stack>
                            <n-card embedded size="small">
                                <custom-naive-horizontal-stack align="center">
                                    <n-text class="text-8">{{ data.nickname }}</n-text>
                                    <n-tag type="info"
                                        >{{ sumBy(data.charts.sd, prop("ra")) }}+{{
                                            sumBy(data.charts.dx, prop("ra"))
                                        }}={{ data.rating }} Rating</n-tag
                                    >
                                </custom-naive-horizontal-stack>
                            </n-card>

                            <n-divider />

                            <n-text class="text-6">Best 35 (以往版本)</n-text>

                            <n-grid :cols="isMobile ? 1 : 4">
                                <template v-for="(item, index) in data.charts.sd">
                                    <n-grid-item>
                                        <sections-game-maimai-best50-item
                                            :index="index"
                                            :item="item"
                                        />
                                    </n-grid-item>
                                </template>
                            </n-grid>

                            <n-divider />

                            <n-text class="text-6">Best 15 (当前版本)</n-text>

                            <n-grid :cols="isMobile ? 1 : 4">
                                <template v-for="(item, index) in data.charts.dx">
                                    <n-grid-item>
                                        <sections-game-maimai-best50-item
                                            :index="index"
                                            :item="item"
                                        />
                                    </n-grid-item>
                                </template>
                            </n-grid>

                            <n-divider />

                            <custom-naive-position placement="center">
                                <n-text>数据来源:</n-text>

                                <custom-redirect href="https://maimai.diving-fish.com">
                                    <n-text type="primary">水鱼查分器</n-text>
                                </custom-redirect>
                            </custom-naive-position>
                        </custom-naive-vertical-stack>
                    </template>
                </template>
            </template>
        </n-card>
    </template>
</template>