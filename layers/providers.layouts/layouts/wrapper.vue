<script lang="ts" setup>
    import { dateZhCN, zhCN } from "naive-ui";
    import { useThemeStore } from "#layers/providers.theme/stores/theme";

    const themeStore = useThemeStore();
</script>

<template>
    <n-config-provider
        :date-locale="dateZhCN"
        :locale="zhCN"
        :theme="themeStore.preset"
        :theme-overrides="themeStore.overrides"
        abstract
        inline-theme-disabled
        preflight-style-disabled
    >
        <n-dialog-provider>
            <n-loading-bar-provider>
                <n-message-provider>
                    <n-modal-provider>
                        <n-notification-provider>
                            <slot />
                        </n-notification-provider>
                    </n-modal-provider>
                </n-message-provider>
            </n-loading-bar-provider>
        </n-dialog-provider>
    </n-config-provider>
</template>