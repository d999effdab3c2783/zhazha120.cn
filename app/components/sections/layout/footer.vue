<script lang="ts" setup>
    import { abbreviatedSha, branch, sha } from "~build/git";
    import { isNonNullish } from "remeda";

    const { isMobile } = useResponsive();
    const appConfig = useAppConfig();
    const utilities = useTemplateRef("utilities");

    const magicKeys = useMagicKeys({
        reactive: true,
    });

    const now = useNow();

    watch(
        () => magicKeys.F8,
        (newState) => {
            if (newState && isNonNullish(utilities.value) && isNonNullish(utilities.value.modal)) {
                utilities.value.modal.toggle();
            }
        },
    );

    const currentYear = computed(() => now.value.getFullYear());
</script>

<template>
    <n-grid :cols="isMobile ? 1 : 5" :y-gap="10">
        <n-grid-item>
            <NaivePosition class="size-full" placement="center">
                <SectionsSharedThemeSwitcher />
            </NaivePosition>
        </n-grid-item>

        <n-grid-item>
            <NaivePosition class="size-full" placement="center">
                <n-text :depth="3">
                    &copy; {{ appConfig.layout.footer.copyright_start_year }} - {{ currentYear }}
                </n-text>
            </NaivePosition>
        </n-grid-item>

        <n-grid-item>
            <NaivePosition class="size-full" placement="center">
                <n-flex align="center" size="small" vertical>
                    <NaiveRedirectorWrapper
                        #="{ href, redirect }"
                        :href="appConfig.layout.footer.filing.icp.link"
                    >
                        <n-button
                            :href="href"
                            tag="a"
                            text
                            type="warning"
                            @click.prevent="redirect"
                        >
                            {{ appConfig.layout.footer.filing.province_abbr }} ICP 备
                            {{ appConfig.layout.footer.filing.icp.code }} 号
                        </n-button>
                    </NaiveRedirectorWrapper>

                    <NaiveRedirectorWrapper
                        #="{ href, redirect }"
                        :href="
                            appConfig.layout.footer.filing.safety.link.replaceAll(
                                '{code}',
                                appConfig.layout.footer.filing.safety.code.toString(),
                            )
                        "
                    >
                        <n-button
                            :href="href"
                            tag="a"
                            text
                            type="warning"
                            @click.prevent="redirect"
                        >
                            {{ appConfig.layout.footer.filing.province_abbr }}公网安备
                            {{ appConfig.layout.footer.filing.safety.code }} 号
                        </n-button>
                    </NaiveRedirectorWrapper>
                </n-flex>
            </NaivePosition>
        </n-grid-item>

        <n-grid-item>
            <NaivePosition class="size-full" placement="center">
                <NaiveRedirectorWrapper
                    #="{ href, redirect }"
                    :href="appConfig.layout.footer.version.link.replace('{sha}', sha)"
                >
                    <n-button
                        :href="href"
                        size="small"
                        tag="a"
                        text
                        type="info"
                        @click.prevent="redirect"
                    >
                        <template #icon>
                            <n-icon class="-mr-4 i-stash:version" />
                        </template>

                        {{ abbreviatedSha }} @ {{ branch }}
                    </n-button>
                </NaiveRedirectorWrapper>
            </NaivePosition>
        </n-grid-item>

        <n-grid-item>
            <NaivePosition class="size-full" placement="center">
                <SectionsSharedUtilities ref="utilities" />
            </NaivePosition>
        </n-grid-item>
    </n-grid>
</template>