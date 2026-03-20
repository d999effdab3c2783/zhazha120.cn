<script lang="ts" setup>
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import SectionsGameMinecraftContacts from "@/components/sections/game/minecraft/contacts.vue";
    import SectionsGameMinecraftSkinview3d from "@/components/sections/game/minecraft/skinview3d/index.vue";
</script>

<template>
    <custom-naive-vertical-stack>
        <sections-game-minecraft-skinview3d />
        <sections-game-minecraft-contacts />
    </custom-naive-vertical-stack>
</template>