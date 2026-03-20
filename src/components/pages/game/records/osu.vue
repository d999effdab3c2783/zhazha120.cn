<script lang="ts" setup>
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import SectionsGameOsuContacts from "@/components/sections/game/osu/contacts.vue";
    import SectionsGameOsuDownloads from "@/components/sections/game/osu/downloads.vue";
    import SectionsGameOsuMania4KeyReformDan from "@/components/sections/game/osu/mania/4-key/reform_dan.vue";
    import SectionsGameOsuOverlay from "@/components/sections/game/osu/overlay.vue";
</script>

<template>
    <custom-naive-vertical-stack>
        <sections-game-osu-overlay />
        <sections-game-osu-mania-4-key-reform-dan />
        <sections-game-osu-contacts />
        <sections-game-osu-downloads />
    </custom-naive-vertical-stack>
</template>