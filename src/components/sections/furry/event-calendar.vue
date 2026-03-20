<script lang="ts" setup>
    import CustomNaiveHorizontalScroll from "@/components/custom/naive/horizontal-scroll.vue";
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import SectionsFurryEvent from "@/components/sections/furry/event.vue";
    import { useDatabase } from "@/composables/database";
    import type FurryEvent from "@/database/tables/furry_event";
    import { isMobile } from "@/shared/responsive";
    import { createDate } from "@/utils/date";
    import { isWithinInterval } from "date-fns";
    import { NCalendar, NCard, NDivider, NText } from "naive-ui";
    import { isEmptyish, isNullish } from "remeda";
    import { computed, ref } from "vue";

    defineOptions({
        name: "SectionsFurryEventCalendar",
    });

    const items = useDatabase<FurryEvent[]>(async (database) => {
        return database.furry_events.toArray();
    });

    const timestamp = ref<number>();

    const filteredItems = computed(() => {
        if (isNullish(items.value)) {
            return;
        }

        return items.value.filter((item) => {
            if (isNullish(timestamp.value)) {
                return;
            }

            return isWithinInterval(new Date(timestamp.value), {
                start: new Date(item.start_date),
                end: new Date(item.end_date),
            });
        });
    });

    const filter = (date: Date) => {
        if (isNullish(items.value)) {
            return;
        }

        return items.value.filter((item) => {
            return isWithinInterval(date, {
                start: new Date(item.start_date),
                end: new Date(item.end_date),
            });
        });
    };
</script>

<template>
    <custom-naive-vertical-stack>
        <template v-if="!isEmptyish(items)">
            <n-divider :title-placement="isMobile ? 'center' : 'left'">活动行程</n-divider>

            <custom-naive-horizontal-scroll>
                <n-card size="small">
                    <n-calendar v-model:value="timestamp" #="{ year, month, date }">
                        <custom-naive-vertical-stack :size="0">
                            <template v-for="item in filter(createDate(year, month, date))">
                                <n-text class="text-5" type="primary">{{
                                    item.short_name ?? item.name
                                }}</n-text>
                            </template>
                        </custom-naive-vertical-stack>
                    </n-calendar>
                </n-card>
            </custom-naive-horizontal-scroll>
        </template>

        <n-card size="small">
            <template v-if="!isEmptyish(filteredItems)">
                <template v-for="item in filteredItems">
                    <custom-redirect :href="`/furry/events/${item.id}`">
                        <sections-furry-event :item="item" />
                    </custom-redirect>
                </template>
            </template>
        </n-card>
    </custom-naive-vertical-stack>
</template>