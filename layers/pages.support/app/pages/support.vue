<script lang="ts" setup>
    import supportConfig from "#layers/pages.support/config/support";

    definePageMeta({
        layout: "subpage",
        title: {
            localeKey: "pages.support:name",
        },
    });
</script>

<template>
    <n-tabs animated type="segment">
        <template v-for="channel in supportConfig.channels">
            <n-tab-pane :name="guessLocale(channel.name)">
                <SectionsSupportChannel :channel="channel" />
            </n-tab-pane>
        </template>
    </n-tabs>
</template>