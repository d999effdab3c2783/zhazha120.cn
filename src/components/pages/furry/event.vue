<script lang="ts" setup>
    import LayoutsSubPage from "@/components/layouts/sub-page.vue";
    import SectionsFurryCharacter from "@/components/sections/furry/character.vue";
    import SectionsFurryEvent from "@/components/sections/furry/event.vue";
    import { useDatabase } from "@/composables/database";
    import type FurryCharacter from "@/database/tables/furry_character";
    import type FurryEvent from "@/database/tables/furry_event";
    import { isMobile } from "@/shared/responsive";
    import { useRouteParams } from "@vueuse/router";
    import { NCard, NDivider, NResult } from "naive-ui";
    import { isArray, isEmptyish, isNonNullish, isNullish } from "remeda";

    const id = useRouteParams("id", undefined, {
        transform: Number,
    });

    const item = useDatabase<FurryEvent>(async (database) => {
        if (isNullish(id.value)) {
            return;
        }

        return database.furry_events.get(id.value);
    });

    const furryCharacters = useDatabase<FurryCharacter[]>(async (database) => {
        if (
            isNullish(item.value) ||
            !isArray(item.value.furry_character_ids) ||
            isEmptyish(item.value.furry_character_ids)
        ) {
            return;
        }

        return database.furry_characters
            .where("id")
            .anyOf(item.value.furry_character_ids)
            .toArray();
    });
</script>

<template>
    <layouts-sub-page>
        <template v-if="isNonNullish(item)">
            <sections-furry-event :item="item" />

            <template
                v-if="
                    isArray(item.furry_character_ids) &&
                    !isEmptyish(item.furry_character_ids) &&
                    !isEmptyish(furryCharacters)
                "
            >
                <n-divider :title-placement="isMobile ? 'center' : 'left'">出的设定</n-divider>

                <template v-for="item in furryCharacters">
                    <sections-furry-character :item="item" />
                </template>
            </template>
        </template>

        <template v-else>
            <n-card size="small">
                <n-result
                    :description="`可能是 ID 为 ${id} 的活动行程不存在`"
                    status="404"
                    title="无结果"
                />
            </n-card>
        </template>
    </layouts-sub-page>
</template>