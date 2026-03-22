<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import CustomNaiveRouteButton from "@/components/custom/naive/route-button.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import { useDatabase, useHasRegistry } from "@/composables/database";
    import type SelfExternalLink from "@/database/tables/self_external_link";
    import { isDesktop } from "@/shared/responsive";
    import { NButtonGroup, NCard, NDivider } from "naive-ui";
    import { isEmptyish, isNonNullish } from "remeda";
    import CustomMarkdown from "@/components/custom/markdown/index.vue";
    import CustomNaiveModalWrapper from "@/components/custom/naive/modal-wrapper.vue";

    defineOptions({
        name: "SectionsSelfDiscover",
    });

    const items = useDatabase<SelfExternalLink[]>(async (database) => {
        return database.self_external_links.toArray();
    });

    const showSelf = useHasRegistry("self.*");
    const showDev = useHasRegistry("dev.*");
    const showSupport = useHasRegistry("support.*");
    const showGame = useHasRegistry("game.*");
    const showBirthday = useHasRegistry("birthday.*");
    const showFurry = useHasRegistry("furry.*");
</script>

<template>
    <n-card size="small" title="探索我">
        <custom-naive-auto-stack>
            <template v-if="!isEmptyish(items)">
                <template v-for="item in items">
                    <n-button-group>
                        <custom-redirect :href="item.href">
                            <custom-naive-button :icon="item.icon">{{
                                item.name
                            }}</custom-naive-button>
                        </custom-redirect>

                        <template v-if="isNonNullish(item.tip)">
                            <custom-naive-modal-wrapper preset="card" title="提示" size="small">
                                <template #trigger="{ toggle }">
                                    <custom-naive-button
                                        @click="toggle"
                                        class="px-2"
                                        icon="i-ant-design:question-circle-outlined"
                                    />
                                </template>

                                <n-element>
                                    <custom-markdown :raw="item.tip" />
                                </n-element>
                            </custom-naive-modal-wrapper>
                        </template>
                    </n-button-group>
                </template>

                <n-divider :vertical="isDesktop" />
            </template>

            <custom-naive-route-button
                :to="{ path: '/tools' }"
                icon="i-ant-design:tool-outlined"
                type="primary"
            />

            <template v-if="showSelf">
                <custom-naive-route-button
                    :to="{ path: '/self' }"
                    icon="i-ant-design:user-outlined"
                    type="primary"
                />
            </template>

            <template v-if="showDev">
                <custom-naive-route-button
                    :to="{ path: '/dev' }"
                    icon="i-ant-design:code-outlined"
                    type="primary"
                />
            </template>

            <template v-if="showSupport">
                <custom-naive-route-button
                    :to="{ path: '/support' }"
                    icon="i-ant-design:heart-outlined"
                    type="primary"
                />
            </template>

            <template v-if="showGame">
                <custom-naive-route-button
                    :to="{ path: '/game' }"
                    icon="i-tabler:device-gamepad"
                    type="primary"
                />
            </template>

            <template v-if="showBirthday">
                <custom-naive-route-button
                    :to="{ path: '/birthday' }"
                    icon="i-mingcute:birthday-2-line"
                    type="primary"
                />
            </template>

            <template v-if="showFurry">
                <custom-naive-route-button
                    :to="{ path: '/furry' }"
                    icon="i-tabler:paw"
                    type="primary"
                />
            </template>
        </custom-naive-auto-stack>
    </n-card>
</template>