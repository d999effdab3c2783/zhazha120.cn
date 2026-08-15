<script lang="ts" setup>
    const { isMobile } = useResponsive();
</script>

<template>
    <n-flex size="small" vertical>
        <n-alert :show-icon="false">
            <n-flex :size="0" vertical>
                <n-text>{{ $t("pages.self:description:1.1") }}</n-text>

                <n-text class="text-(black opacity-0)">
                    {{ $t("pages.self:description:1.2") }}
                </n-text>

                <n-text :depth="3">{{ $t("pages.self:description:1.3") }}</n-text>
                <n-text :depth="3">{{ $t("pages.self:description:1.4") }}</n-text>
                <n-text :depth="3">{{ $t("pages.self:description:1.5") }}</n-text>

                <n-text :depth="3">{{ $t("pages.self:description:1.6") }}</n-text>
            </n-flex>
        </n-alert>

        <n-flex :vertical="isMobile" size="small">
            <n-alert class="flex-1" type="info">
                <n-flex :size="0" vertical>
                    <n-text>{{ $t("pages.self:description:2.1") }}</n-text>
                    <n-text>{{ $t("pages.self:description:2.2") }}</n-text>
                    <n-text>{{ $t("pages.self:description:2.3") }}</n-text>
                </n-flex>
            </n-alert>

            <n-alert class="flex-1" type="warning">
                <n-flex :size="0" vertical>
                    <n-text>{{ $t("pages.self:description:3.1") }}</n-text>
                    <n-text>{{ $t("pages.self:description:3.2") }}</n-text>
                    <n-text>{{ $t("pages.self:description:3.3") }}</n-text>
                </n-flex>
            </n-alert>
        </n-flex>

        <n-alert class="bg-purple-900/50">
            <template #icon>
                <n-icon class="text-purple-200 i-ant-design:question-circle-filled" />
            </template>

            <n-flex :size="0" vertical>
                <n-text :depth="3">{{ $t("pages.self:description:4.1") }}</n-text>
            </n-flex>
        </n-alert>

        <n-flex :vertical="isMobile" size="small">
            <n-alert class="flex-1" type="error">
                <n-flex :size="0" vertical>
                    <n-text>{{ $t("pages.self:description:5.1") }}</n-text>
                    <n-text>{{ $t("pages.self:description:5.2") }}</n-text>
                </n-flex>
            </n-alert>

            <n-alert class="flex-1" type="success">
                <n-flex :size="0" vertical>
                    <n-text>{{ $t("pages.self:description:6.1") }}</n-text>
                    <n-text>{{ $t("pages.self:description:6.2") }}</n-text>
                </n-flex>
            </n-alert>
        </n-flex>
    </n-flex>
</template>