<script lang="ts" setup>
    import competitionsConfig from "../../../../config/competitions.ts" with { type: "macro" };
    import { isNonNullish } from "remeda";

    const { isMobile } = useResponsive();
    const message = useMessage();
    const i18n = useI18n();

    const handleEmptyClick = () => {
        message.info(i18n.t("pages.dev:competitions:no_trace_link"));
    };
</script>

<template>
    <n-flex :vertical="isMobile" size="small">
        <template v-for="{ name, href } in competitionsConfig">
            <template v-if="isNonNullish(href)">
                <naive-redirector-wrapper #="{ href, redirect }" :href="href">
                    <n-button
                        :block="isMobile"
                        :href="href"
                        class="flex-1 h-full p-4"
                        size="small"
                        tag="a"
                        @click.prevent="redirect"
                    >
                        <n-element
                            :class="[
                                'whitespace-pre leading-tight',
                                { 'text-wrap': isMobile },
                                { 'text-nowrap': !isMobile },
                            ]"
                        >
                            {{ guessLocale(name) }}
                        </n-element>
                    </n-button>
                </naive-redirector-wrapper>
            </template>

            <template v-else>
                <n-button
                    :block="isMobile"
                    class="flex-1 h-full p-4"
                    secondary
                    size="small"
                    @click="handleEmptyClick"
                >
                    <n-element
                        :class="[
                            'whitespace-pre leading-tight',
                            { 'text-wrap': isMobile },
                            { 'text-nowrap': !isMobile },
                        ]"
                    >
                        {{ guessLocale(name) }}
                    </n-element>
                </n-button>
            </template>
        </template>
    </n-flex>
</template>