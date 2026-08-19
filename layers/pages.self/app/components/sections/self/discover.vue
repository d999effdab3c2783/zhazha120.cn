<script lang="ts" setup>
    import externalLinksConfig from "#layers/pages.self/config/external_links";
    import { isNonNullish } from "remeda";

    const { isMobile } = useResponsive();
</script>

<template>
    <n-flex align="center" size="small">
        <template v-for="{ type, icon, name, href, comment } in externalLinksConfig">
            <NaiveRedirectorWrapper :href="href">
                <template #default="{ aProps, redirect }">
                    <n-button
                        :block="isMobile"
                        :type="type"
                        tag="a"
                        v-bind="aProps"
                        @click.prevent="redirect"
                    >
                        <template #icon>
                            <n-icon :class="icon" />
                        </template>

                        {{ guessLocale(name) }}
                    </n-button>
                </template>

                <template v-if="isNonNullish(comment)" #extra>
                    <n-element class="text-center whitespace-pre">
                        <n-text type="info">{{ guessLocale(comment) }}</n-text>
                    </n-element>
                </template>
            </NaiveRedirectorWrapper>
        </template>
    </n-flex>
</template>