<script lang="ts" setup>
    definePageMeta({
        layout: "subpage",
        title: {
            localeKey: "pages.misc:name",
        },
    });
</script>

<template>
    <n-flex class="w-full" size="small" vertical>
        <n-card :title="$t('pages.misc:friend_links')" size="small">
            <SectionsMiscFriendLinks />
        </n-card>
    </n-flex>
</template>