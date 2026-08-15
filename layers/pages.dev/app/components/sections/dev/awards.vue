<script lang="ts" setup>
    import { isNonNullish } from "remeda";

    const appConfig = useAppConfig();
    const { isMobile } = useResponsive();
    const message = useMessage();
    const i18n = useI18n();

    const handleEmptyClick = () => {
        message.info(i18n.t("pages.dev:awards:no_trace_link"));
    };
</script>

<template>
    <n-flex :vertical="isMobile" size="small">
        <template v-for="award in appConfig.dev.awards">
            <template v-if="isNonNullish(award.href)">
                <naive-redirector-wrapper #="{ href, redirect }" :href="award.href">
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
                            {{ guessLocale(award.name) }}
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
                        {{ guessLocale(award.name) }}
                    </n-element>
                </n-button>
            </template>
        </template>
    </n-flex>
</template>