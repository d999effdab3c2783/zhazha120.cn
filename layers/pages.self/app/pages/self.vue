<script lang="ts" setup>
    definePageMeta({
        layout: "subpage",
        title: {
            localeKey: "pages.self:name",
        },
    });
</script>

<template>
    <n-flex class="w-full" size="small" vertical>
        <SectionsSelfDescription />

        <n-card :title="$t('pages.self:find_me')" size="small">
            <SectionsSelfContacts />
        </n-card>

        <n-card :title="$t('pages.self:discover_me')" size="small">
            <SectionsSelfDiscover />
        </n-card>
    </n-flex>
</template>