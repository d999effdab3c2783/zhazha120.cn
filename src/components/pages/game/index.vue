<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import CustomNaiveRouteButton from "@/components/custom/naive/route-button.vue";
    import LayoutsSubPage from "@/components/layouts/sub-page.vue";
    import { useHasRegistry } from "@/composables/database";
    import { NCard } from "naive-ui";

    const showMaimai = useHasRegistry("game.records.maimai.*");
    const showMinecraft = useHasRegistry("game.records.minecraft.*");
    const showOsu = useHasRegistry("game.records.osu.*");
    const showMalody = useHasRegistry("game.records.malody.*");
    const showGeometryDash = useHasRegistry("game.records.geometry_dash.*");
    const showTetrio = useHasRegistry("game.records.tetrio.*");
</script>

<template>
    <layouts-sub-page>
        <template
            v-if="
                showMaimai ||
                showMinecraft ||
                showOsu ||
                showMalody ||
                showGeometryDash ||
                showTetrio
            "
        >
            <n-card size="small" title="记录">
                <custom-naive-auto-stack>
                    <template v-if="showMaimai">
                        <custom-naive-route-button
                            :to="{ path: '/game/records/maimai' }"
                            icon="i-custom:maimai"
                        />
                    </template>

                    <template v-if="showMinecraft">
                        <custom-naive-route-button
                            :to="{ path: '/game/records/minecraft' }"
                            icon="i-arcticons:minecraft"
                        />
                    </template>

                    <template v-if="showOsu">
                        <custom-naive-route-button
                            :to="{ path: '/game/records/osu' }"
                            icon="i-arcticons:osu"
                        />
                    </template>

                    <template v-if="showMalody">
                        <custom-naive-route-button
                            :to="{ path: '/game/records/malody' }"
                            icon="i-arcticons:malody-v"
                        />
                    </template>

                    <template v-if="showGeometryDash">
                        <custom-naive-route-button
                            :to="{ path: '/game/records/geometry_dash' }"
                            icon="i-arcticons:geometry-dash"
                        />
                    </template>

                    <template v-if="showTetrio">
                        <custom-naive-route-button
                            :to="{ path: '/game/records/tetrio' }"
                            icon="i-custom:tetrio"
                        />
                    </template>
                </custom-naive-auto-stack>
            </n-card>
        </template>
    </layouts-sub-page>
</template>