<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import { useDatabase } from "@/composables/database";
    import type DevAward from "@/database/tables/dev_award";
    import { isMobile } from "@/shared/responsive";
    import { NCard, NText } from "naive-ui";
    import { isEmptyish } from "remeda";

    defineOptions({
        name: "SectionsDevAwards",
    });

    const items = useDatabase<DevAward[]>(async (database) => {
        return database.dev_awards.toArray();
    });
</script>

<template>
    <template v-if="!isEmptyish(items)">
        <custom-naive-auto-stack>
            <template v-for="item in items">
                <n-card :class="{ 'text-center': isMobile }" class="flex-1" size="small">
                    <template v-if="!isEmptyish(item.href)">
                        <custom-redirect :href="item.href">
                            <n-text class="whitespace-pre-line" type="primary">{{
                                item.name
                            }}</n-text>
                        </custom-redirect>
                    </template>

                    <template v-else>
                        <n-text class="whitespace-pre-line">{{ item.name }}</n-text>
                    </template>
                </n-card>
            </template>
        </custom-naive-auto-stack>
    </template>
</template>