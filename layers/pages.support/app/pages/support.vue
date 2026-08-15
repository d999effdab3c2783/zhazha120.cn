<script lang="ts" setup>
    import { isNonNullish } from "remeda";

    definePageMeta({
        layout: "subpage",
        title: {
            localeKey: "pages.support:name",
        },
    });

    const appConfig = useAppConfig();
</script>

<template>
    <n-tabs animated type="segment">
        <template v-for="channel in appConfig.support.channels">
            <n-tab-pane :name="guessLocale(channel.name)">
                <n-flex size="small" vertical>
                    <template v-for="method in channel.methods">
                        <template v-if="method.type === 'external'">
                            <n-card :title="guessLocale(method.name) ?? undefined" size="small">
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
                                                <naive-redirector-wrapper
                                                    #="{ href, redirect }"
                                                    :href="method.href"
                                                >
                                                    <n-button
                                                        :href="href"
                                                        size="small"
                                                        tag="a"
                                                        type="primary"
                                                        @click.prevent="redirect"
                                                    >
                                                        <template #icon>
                                                            <n-icon
                                                                class="i-ant-design:link-outlined"
                                                            />
                                                        </template>

                                                        {{ $t("pages.support:visit") }}
                                                    </n-button>
                                                </naive-redirector-wrapper>
                                            </naive-position>
                                        </n-element>

                                        <iframe
                                            :src="method.href"
                                            class="w-full h-240 border-none"
                                        />
                                    </n-element>
                                </n-flex>
                            </n-card>
                        </template>

                        <template v-if="method.type === 'qrcode'">
                            <template
                                v-if="isNonNullish(method.image) || isNonNullish(method.content)"
                            >
                                <n-card :title="guessLocale(method.name) ?? undefined" size="small">
                                    <template v-if="isNonNullish(method.image)">
                                        <n-flex justify="center">
                                            <n-image :src="method.image" />
                                        </n-flex>
                                    </template>

                                    <template v-if="isNonNullish(method.content)" #action>
                                        <n-flex align="center" size="small" vertical>
                                            <n-qr-code
                                                :icon-src="appConfig.self.avatar.src"
                                                :size="appConfig.support.fallback_qrcode_size"
                                                :value="method.content"
                                                class="box-content"
                                                icon-background-color="transparent"
                                            />

                                            <n-text>{{ $t("pages.support:fallback") }}</n-text>
                                        </n-flex>
                                    </template>
                                </n-card>
                            </template>
                        </template>
                    </template>
                </n-flex>
            </n-tab-pane>
        </template>
    </n-tabs>
</template>