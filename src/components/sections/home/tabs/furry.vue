<script lang="ts" setup>
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import SectionsFurryCharacters from "@/components/sections/furry/characters.vue";
    import SectionsFurryDescription from "@/components/sections/furry/description.vue";

    defineOptions({
        name: "SectionsHomeTabsFurry",
    });
</script>

<template>
    <custom-naive-vertical-stack>
        <sections-furry-description />
        <sections-furry-characters />
    </custom-naive-vertical-stack>
</template>