<script lang="ts" setup>
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import SectionsFurryCharacter from "@/components/sections/furry/character.vue";
    import { useDatabase } from "@/composables/database";
    import type FurryCharacter from "@/database/tables/furry_character";
    import { isMobile } from "@/shared/responsive";
    import { NDivider } from "naive-ui";
    import { isEmptyish } from "remeda";

    defineOptions({
        name: "SectionsFurryCharacters",
    });

    const items = useDatabase<FurryCharacter[]>(async (database) => {
        return database.furry_characters.toArray();
    });
</script>

<template>
    <custom-naive-vertical-stack>
        <template v-if="!isEmptyish(items)">
            <n-divider :title-placement="isMobile ? 'center' : 'left'">设定</n-divider>

            <template v-for="item in items">
                <custom-redirect :href="`/furry/characters/${item.id}`">
                    <sections-furry-character :item="item" />
                </custom-redirect>
            </template>
        </template>
    </custom-naive-vertical-stack>
</template>