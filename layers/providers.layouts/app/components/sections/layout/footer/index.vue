<script lang="ts" setup>
    import { abbreviatedSha, branch, sha } from "~build/git";
    import footerConfig from "#layers/providers.layouts/config/footer";

    const { isMobile } = useResponsive();

    const now = useNow();
    const currentYear = computed(() => now.value.getFullYear());
</script>

<template>
    <n-grid :cols="isMobile ? 1 : 5" :y-gap="10">
        <n-grid-item>
            <NaivePosition class="size-full" placement="center">
                <n-flex align="center" vertical>
                    <SectionsSharedLocaleSwitcher />
                    <SectionsSharedThemeSwitcher />
                </n-flex>
            </NaivePosition>
        </n-grid-item>

        <n-grid-item>
            <NaivePosition class="size-full" placement="center">
                <n-text :depth="3">
                    &copy; {{ footerConfig.copyright_start_year }} - {{ currentYear }}
                </n-text>
            </NaivePosition>
        </n-grid-item>

        <n-grid-item>
            <NaivePosition class="size-full" placement="center">
                <n-flex align="center" size="small" vertical>
                    <NaiveRedirectorWrapper
                        #="{ aProps, redirect }"
                        :href="footerConfig.filing.icp.link"
                    >
                        <n-button
                            class="fw-extrabold"
                            tag="a"
                            text
                            type="warning"
                            v-bind="aProps"
                            @click.prevent="redirect"
                        >
                            {{ footerConfig.filing.province_abbr }} ICP 备
                            {{ footerConfig.filing.icp.code }} 号
                        </n-button>
                    </NaiveRedirectorWrapper>

                    <NaiveRedirectorWrapper
                        #="{ aProps, redirect }"
                        :href="
                            footerConfig.filing.safety.link.replaceAll(
                                '{code}',
                                footerConfig.filing.safety.code.toString(),
                            )
                        "
                    >
                        <n-button
                            class="fw-extrabold"
                            tag="a"
                            text
                            type="warning"
                            v-bind="aProps"
                            @click.prevent="redirect"
                        >
                            {{ footerConfig.filing.province_abbr }}公网安备
                            {{ footerConfig.filing.safety.code }} 号
                        </n-button>
                    </NaiveRedirectorWrapper>
                </n-flex>
            </NaivePosition>
        </n-grid-item>

        <n-grid-item>
            <NaivePosition class="size-full" placement="center">
                <NaiveRedirectorWrapper
                    #="{ aProps, redirect }"
                    :href="footerConfig.version.link.replace('{sha}', sha)"
                >
                    <n-button
                        size="small"
                        tag="a"
                        text
                        type="info"
                        v-bind="aProps"
                        @click.prevent="redirect"
                    >
                        <template #icon>
                            <n-icon class="-mr-4 i-stash:version" />
                        </template>

                        {{ footerConfig.version.overrides.sha ?? abbreviatedSha }}
                        @
                        {{ footerConfig.version.overrides.branch ?? branch }}
                    </n-button>
                </NaiveRedirectorWrapper>
            </NaivePosition>
        </n-grid-item>

        <n-grid-item>
            <NaivePosition class="size-full" placement="center">
                <SectionsLayoutFooterUtilities />
            </NaivePosition>
        </n-grid-item>
    </n-grid>
</template>