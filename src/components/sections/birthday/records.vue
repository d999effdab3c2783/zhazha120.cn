<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import { useDatabase } from "@/composables/database";
    import type BirthdayRecord from "@/database/tables/birthday_record";
    import { isMobile } from "@/shared/responsive";
    import { NCard, NDivider } from "naive-ui";
    import { isEmptyish } from "remeda";

    defineOptions({
        name: "SectionsBirthdayRecords",
    });

    const items = useDatabase<BirthdayRecord[]>(async (database) => {
        return database.birthday_records.toArray();
    });
</script>

<template>
    <custom-naive-vertical-stack>
        <template v-if="!isEmptyish(items)">
            <n-divider :title-placement="isMobile ? 'center' : 'left'">记录</n-divider>

            <n-card size="small">
                <custom-naive-auto-stack>
                    <template v-for="item in items">
                        <custom-redirect :href="`/birthday/records/${item.age}`">
                            <custom-naive-button icon="i-tabler:clock-record">
                                {{ item.age }} 岁
                            </custom-naive-button>
                        </custom-redirect>
                    </template>
                </custom-naive-auto-stack>
            </n-card>
        </template>
    </custom-naive-vertical-stack>
</template>