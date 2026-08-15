<script lang="ts" setup>
    definePageMeta({
        layout: "subpage",
        title: {
            localeKey: "pages.dev:name",
        },
    });
</script>

<template>
    <n-flex class="w-full" size="small" vertical>
        <n-card size="small">
            <SectionsDevDescription />
        </n-card>

        <n-card :title="$t('pages.dev:metrics')" size="small">
            <SectionsDevCodetime />
        </n-card>

        <n-divider>{{ $t("pages.dev:stacks:name") }}</n-divider>

        <SectionsDevStacks />

        <n-divider>{{ $t("pages.dev:experience") }}</n-divider>

        <n-card :title="$t('pages.dev:organizations')" size="small">
            <SectionsDevOrganizations />
        </n-card>

        <n-card :title="$t('pages.dev:projects:name')" size="small">
            <SectionsDevProjects />
        </n-card>

        <n-divider>{{ $t("pages.dev:challenges") }}</n-divider>

        <n-card :title="$t('pages.dev:competition_history')" size="small">
            <SectionsDevAwards />
        </n-card>
    </n-flex>
</template>