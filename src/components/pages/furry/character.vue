<script lang="ts" setup>
    import CustomMarkdown from "@/components/custom/markdown/index.vue";
    import LayoutsSubPage from "@/components/layouts/sub-page.vue";
    import SectionsFurryCharacter from "@/components/sections/furry/character.vue";
    import { useDatabase } from "@/composables/database";
    import type FurryCharacter from "@/database/tables/furry_character";
    import { useRouteParams } from "@vueuse/router";
    import { NCard, NResult } from "naive-ui";
    import { isNonNullish, isNullish } from "remeda";

    const id = useRouteParams("id", undefined, {
        transform: Number,
    });

    const item = useDatabase<FurryCharacter>(async (database) => {
        if (isNullish(id.value)) {
            return;
        }

        return database.furry_characters.get(id.value);
    });
</script>

<template>
    <layouts-sub-page>
        <template v-if="isNonNullish(item)">
            <sections-furry-character :item="item" />
            <custom-markdown :raw="item.content" />
        </template>

        <template v-else>
            <n-card size="small">
                <n-result
                    :description="`可能是 ID 为 ${id} 的兽设不存在`"
                    status="404"
                    title="无结果"
                />
            </n-card>
        </template>
    </layouts-sub-page>
</template>