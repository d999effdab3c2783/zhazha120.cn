<script lang="ts" setup>
    definePageMeta({
        layout: "subpage",
        title: "开发",
    });
</script>

<template>
    <n-flex class="w-full" size="small" vertical>
        <n-card size="small">
            <SectionsDevDescription />
        </n-card>

        <n-card size="small" title="态势">
            <SectionsDevCodetime />
        </n-card>

        <n-divider>技术栈</n-divider>

        <SectionsDevStacks />

        <n-divider>技术履历</n-divider>

        <n-card size="small" title="加入的组织">
            <SectionsDevOrganizations />
        </n-card>

        <n-card size="small" title="做过的项目">
            <SectionsDevProjects />
        </n-card>

        <n-divider>技术挑战</n-divider>

        <n-card size="small" title="打过的比赛">
            <SectionsDevAwards />
        </n-card>
    </n-flex>
</template>