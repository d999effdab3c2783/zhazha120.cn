<script lang="ts" setup>
    definePageMeta({
        layout: "subpage",
        name: "本体",
    });
</script>

<template>
    <n-flex class="w-full" size="small" vertical>
        <SectionsSelfDescription />

        <n-card size="small" title="找到我">
            <SectionsSelfContacts />
        </n-card>

        <n-card size="small" title="探索我">
            <SectionsSelfDiscover />
        </n-card>
    </n-flex>
</template>