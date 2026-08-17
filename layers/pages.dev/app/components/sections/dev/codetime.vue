<script lang="ts" setup>
    import { isNonNullish } from "remeda";
    import codetimeConfig from "../../../../config/codetime.ts" with { type: "macro" };

    const themeStore = useThemeStore();
    const { isMobile } = useResponsive();

    const processWidget = (url: string) => {
        if (isNonNullish(themeStore.actualMode)) {
            return url.replaceAll("{theme}", themeStore.actualMode);
        }

        return url;
    };
</script>

<template>
    <n-flex align="center" size="small" vertical>
        <n-image :src="processWidget(codetimeConfig.widgets.calendar)" />

        <n-flex :vertical="isMobile" size="small">
            <n-image :src="processWidget(codetimeConfig.widgets.trend)" />

            <n-element class="flex-1">
                <n-tabs :justify-content="isMobile ? 'center' : undefined" animated>
                    <n-tab-pane :name="$t('pages.dev:codetime:by_language')">
                        <n-flex :justify="isMobile ? 'center' : undefined">
                            <n-image :src="processWidget(codetimeConfig.widgets.top.languages)" />
                        </n-flex>
                    </n-tab-pane>

                    <n-tab-pane :name="$t('pages.dev:codetime:by_project')">
                        <n-flex :justify="isMobile ? 'center' : undefined">
                            <n-image :src="processWidget(codetimeConfig.widgets.top.projects)" />
                        </n-flex>
                    </n-tab-pane>
                </n-tabs>
            </n-element>
        </n-flex>

        <n-flex :vertical="isMobile" align="center" justify="space-evenly" size="small">
            <n-image :src="processWidget(codetimeConfig.widgets.status)" />
            <n-image :src="processWidget(codetimeConfig.widgets.usage)" />
        </n-flex>

        <n-flex :vertical="isMobile" align="center" justify="space-evenly" size="small">
            <n-image :src="processWidget(codetimeConfig.widgets.badge.coding_time)" />
            <n-image :src="processWidget(codetimeConfig.widgets.badge.tokens)" />
        </n-flex>

        <n-element class="mt-4">
            <n-flex :size="0" align="center" vertical>
                <n-text :depth="3">{{ $t("pages.dev:codetime:for_reference_only") }}</n-text>

                <naive-redirector-wrapper
                    #="{ href, redirect }"
                    :href="`https://${codetimeConfig.domain}`"
                >
                    <n-button :href="href" tag="a" text @click.prevent="redirect">
                        {{ codetimeConfig.domain }}
                    </n-button>
                </naive-redirector-wrapper>
            </n-flex>
        </n-element>
    </n-flex>
</template>