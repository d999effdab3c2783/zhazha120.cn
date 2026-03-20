<script lang="ts" setup>
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import SectionsGameTetrioBlitzTimelines from "@/components/sections/game/tetrio/timelines/blitz.vue";
    import SectionsGameTetrioSprintTimelines from "@/components/sections/game/tetrio/timelines/sprint.vue";
    import SectionsGameTetrioTetraLeagueSeason1Timeline from "@/components/sections/game/tetrio/timelines/tetra_league_season_1.vue";
    import SectionsGameTetrioTetraLeagueSeason2Timeline from "@/components/sections/game/tetrio/timelines/tetra_league_season_2.vue";

    defineOptions({
        name: "SectionsGameTetrioTimelines",
    });
</script>

<template>
    <custom-naive-vertical-stack>
        <sections-game-tetrio-sprint-timelines />
        <sections-game-tetrio-blitz-timelines />
        <sections-game-tetrio-tetra-league-season-1-timeline />
        <sections-game-tetrio-tetra-league-season-2-timeline />
    </custom-naive-vertical-stack>
</template>