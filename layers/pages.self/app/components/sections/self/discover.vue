<script lang="ts" setup>
    import externalLinksConfig from "../../../../config/external_links.ts" with { type: "macro" };
    import { isNonNullish } from "remeda";

    const { isMobile } = useResponsive();
</script>

<template>
    <n-flex align="center" size="small">
        <template v-for="{ type, icon, name, href, comment } in externalLinksConfig">
            <NaiveRedirectorWrapper :href="href">
                <template #default="{ href, redirect }">
                    <n-button
                        :block="isMobile"
                        :href="href"
                        :type="type"
                        tag="a"
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