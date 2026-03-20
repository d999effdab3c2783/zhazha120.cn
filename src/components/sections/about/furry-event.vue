<script lang="ts" setup>
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import SectionsFurryEvent from "@/components/sections/furry/event.vue";
    import { useDatabase } from "@/composables/database";
    import type FurryEvent from "@/database/tables/furry_event";
    import { isMobile } from "@/shared/responsive";
    import { useNow } from "@vueuse/core";
    import { isWithinInterval } from "date-fns";
    import { NDivider } from "naive-ui";
    import { isEmptyish } from "remeda";

    defineOptions({
        name: "SectionsAboutFurryEvent",
    });

    const now = useNow();

    const items = useDatabase<FurryEvent[]>(async (database) => {
        return database.furry_events
            .filter((item) => {
                return isWithinInterval(now.value, {
                    start: new Date(item.start_date),
                    end: new Date(item.end_date),
                });
            })
            .toArray();
    });
</script>

<template>
    <custom-naive-vertical-stack>
        <template v-if="!isEmptyish(items)">
            <n-divider :title-placement="isMobile ? 'center' : 'left'">进行中的活动行程</n-divider>

            <template v-for="item in items">
                <custom-redirect :href="`/furry/events/${item.id}`">
                    <sections-furry-event :item="item" />
                </custom-redirect>
            </template>
        </template>
    </custom-naive-vertical-stack>
</template>