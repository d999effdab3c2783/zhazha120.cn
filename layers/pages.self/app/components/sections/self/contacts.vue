<script lang="ts" setup>
    import contactsConfig from "#layers/pages.self/config/contacts";
    import { isNonNullish } from "remeda";

    const { isMobile } = useResponsive();
</script>

<template>
    <n-flex align="center" size="small">
        <template v-for="{ icon, name, href, comment } in contactsConfig">
            <NaiveRedirectorWrapper :href="href">
                <template #default="{ aProps, redirect }">
                    <n-button :block="isMobile" tag="a" v-bind="aProps" @click.prevent="redirect">
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