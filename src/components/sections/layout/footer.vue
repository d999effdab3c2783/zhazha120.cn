<script lang="ts" setup>
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import CustomNaivePosition from "@/components/custom/naive/position.vue";
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import SectionsUtils from "@/components/sections/utils/index.vue";
    import { useZodRegistry } from "@/composables/database";
    import { isDesktop, isMobile } from "@/shared/responsive";
    import { useThemeStore } from "@/stores/theme";
    import { NElement, NGrid, NGridItem, NIcon, NText } from "naive-ui";
    import { isNonNullish } from "remeda";
    import { z } from "zod";
    import { sha } from "~build/git";

    defineOptions({
        name: "SectionsLayoutFooter",
    });

    const {
        0: copyright_start_year,
        1: filing_province_abbreviation,
        2: filing_icp_code,
        3: filing_safety_code,
        4: commit_repository,
    } = useZodRegistry(
        z.object({
            "footer.copyright.start_year:0": z.number(),
            "footer.filing.province_abbreviation:1": z.string(),
            "footer.filing.icp_code:2": z.number(),
            "footer.filing.safety_code:3": z.number(),
            "footer.commit.repository:4": z.string(),
        }),
    );

    const themeStore = useThemeStore();

    const now = new Date();
    const currentYear = now.getFullYear();
</script>

<template>
    <n-element class="p-2">
        <n-grid :cols="isMobile ? 1 : 5" :y-gap="isMobile ? 12 : 0">
            <n-grid-item>
                <custom-naive-position
                    :placement="isMobile ? 'center' : 'center-left'"
                    class="h-full"
                >
                    <custom-naive-button
                        :focusable="false"
                        :icon="themeStore.nextTheme.icon"
                        :text="isDesktop"
                        size="small"
                        @click="themeStore.switchNextTheme()"
                        >{{ themeStore.nextTheme.name }}</custom-naive-button
                    >
                </custom-naive-position>
            </n-grid-item>

            <n-grid-item>
                <template v-if="isNonNullish(copyright_start_year)">
                    <custom-naive-position class="h-full" placement="center">
                        <n-text>&copy; {{ copyright_start_year }} - {{ currentYear }}</n-text>
                    </custom-naive-position>
                </template>
            </n-grid-item>

            <n-grid-item>
                <custom-naive-vertical-stack :size="0" align="center" class="leading-tight">
                    <template
                        v-if="
                            isNonNullish(filing_province_abbreviation) &&
                            isNonNullish(filing_icp_code)
                        "
                    >
                        <custom-redirect href="https://beian.miit.gov.cn">
                            <n-text type="primary">
                                {{ filing_province_abbreviation }} ICP 备 {{ filing_icp_code }} 号
                            </n-text>
                        </custom-redirect>
                    </template>

                    <template
                        v-if="
                            isNonNullish(filing_province_abbreviation) &&
                            isNonNullish(filing_safety_code)
                        "
                    >
                        <custom-redirect
                            :href="`https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=${filing_safety_code}`"
                        >
                            <n-text type="primary">
                                {{ filing_province_abbreviation }}公网安备
                                {{ filing_safety_code }} 号
                            </n-text>
                        </custom-redirect>
                    </template>
                </custom-naive-vertical-stack>
            </n-grid-item>

            <n-grid-item>
                <template v-if="isNonNullish(commit_repository)">
                    <custom-naive-position :size="0" class="h-full" placement="center">
                        <n-icon class="size-6 i-stash:version" />

                        <custom-redirect :href="`${commit_repository}/commit/${sha}`">
                            <n-text type="primary">{{ sha.substring(0, 7) }}</n-text>
                        </custom-redirect>
                    </custom-naive-position>
                </template>
            </n-grid-item>

            <n-grid-item>
                <custom-naive-position
                    :placement="isMobile ? 'center' : 'center-right'"
                    class="h-full"
                >
                    <sections-utils />
                </custom-naive-position>
            </n-grid-item>
        </n-grid>
    </n-element>
</template>