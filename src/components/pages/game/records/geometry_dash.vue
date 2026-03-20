<script lang="ts" setup>
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import SectionsGameGeometryDashContacts from "@/components/sections/game/geometry_dash/contacts.vue";
    import SectionsGameGeometryDashInfo from "@/components/sections/game/geometry_dash/info.vue";
    import SectionsGameGeometryDashOverlay from "@/components/sections/game/geometry_dash/overlay.vue";
</script>

<template>
    <custom-naive-vertical-stack>
        <sections-game-geometry-dash-overlay />
        <sections-game-geometry-dash-info />
        <sections-game-geometry-dash-contacts />
    </custom-naive-vertical-stack>
</template>