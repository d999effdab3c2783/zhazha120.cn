<script lang="ts" setup>
    definePageMeta({
        layout: "subpage",
        title: {
            localeKey: "pages.furry:name",
        },
    });
</script>

<template>
    <n-flex class="w-full" size="small" vertical>
        <n-card size="small">
            <SectionsFurryDescription />
        </n-card>
    </n-flex>
</template>