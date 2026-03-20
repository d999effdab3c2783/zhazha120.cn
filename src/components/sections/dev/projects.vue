<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import { useDatabase } from "@/composables/database";
    import type DevProject from "@/database/tables/dev_project";
    import { NCard } from "naive-ui";
    import { isEmptyish } from "remeda";

    defineOptions({
        name: "SectionsDevProjects",
    });

    const items = useDatabase<DevProject[]>(async (database) => {
        return database.dev_projects.toArray();
    });
</script>

<template>
    <template v-if="!isEmptyish(items)">
        <n-card size="small" title="做过的项目">
            <custom-naive-auto-stack>
                <template v-for="item in items">
                    <custom-redirect :href="item.href">
                        <custom-naive-button>{{ item.name }}</custom-naive-button>
                    </custom-redirect>
                </template>
            </custom-naive-auto-stack>
        </n-card>
    </template>
</template>