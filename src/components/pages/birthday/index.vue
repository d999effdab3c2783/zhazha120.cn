<script lang="ts" setup>
    import LayoutsSubPage from "@/components/layouts/sub-page.vue";
    import SectionsBirthdayCurrent from "@/components/sections/birthday/current.vue";
    import SectionsBirthdayRecords from "@/components/sections/birthday/records.vue";
</script>

<template>
    <layouts-sub-page>
        <sections-birthday-current />
        <sections-birthday-records />
    </layouts-sub-page>
</template>