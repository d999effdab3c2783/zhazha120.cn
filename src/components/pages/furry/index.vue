<script lang="ts" setup>
    import LayoutsSubPage from "@/components/layouts/sub-page.vue";
    import SectionsFurryCharacters from "@/components/sections/furry/characters.vue";
    import SectionsFurryDescription from "@/components/sections/furry/description.vue";
    import SectionsFurryEventCalendar from "@/components/sections/furry/event-calendar.vue";
</script>

<template>
    <layouts-sub-page>
        <sections-furry-description />
        <sections-furry-event-calendar />
        <sections-furry-characters />
    </layouts-sub-page>
</template>