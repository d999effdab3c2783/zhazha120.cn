<script lang="ts" setup>
    import type { ExternalMethod } from "#layers/pages.support/app/types/support";
    import { isNonNullish } from "remeda";

    defineProps<{
        readonly method: ExternalMethod;
    }>();
</script>

<template>
    <n-card :title="isNonNullish(method.name) ? guessLocale(method.name) : undefined" size="small">
        <n-flex size="small" vertical>
            <template v-if="isNonNullish(method.comment)">
                <n-alert type="info">
                    {{ guessLocale(method.comment) }}
                </n-alert>
            </template>

            <n-element class="h-full relative">
                <n-element
                    class="size-full absolute top-0 left-0 transition-([opacity_background] duration-500 ease-in-out) opacity-0 hover:(bg-([#000000] opacity-50) opacity-100)"
                >
                    <naive-position class="h-full" placement="center">
                        <naive-redirector-wrapper #="{ aProps, redirect }" :href="method.href">
                            <n-button
                                size="small"
                                tag="a"
                                type="primary"
                                v-bind="aProps"
                                @click.prevent="redirect"
                            >
                                <template #icon>
                                    <n-icon class="i-ant-design:link-outlined" />
                                </template>

                                {{ $t("pages.support:visit") }}
                            </n-button>
                        </naive-redirector-wrapper>
                    </naive-position>
                </n-element>

                <iframe :src="method.href" class="w-full h-240 border-none" />
            </n-element>
        </n-flex>
    </n-card>
</template>