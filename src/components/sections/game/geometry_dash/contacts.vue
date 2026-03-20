<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import { useDatabase } from "@/composables/database";
    import type GeometryDashContact from "@/database/tables/geometry_dash_contact";
    import { NCard } from "naive-ui";
    import { isEmptyish } from "remeda";

    defineOptions({
        name: "SectionsGameGeometryDashContacts",
    });

    const items = useDatabase<GeometryDashContact[]>(async (database) => {
        return database.geometry_dash_contacts.toArray();
    });
</script>

<template>
    <template v-if="!isEmptyish(items)">
        <n-card size="small" title="找到我">
            <custom-naive-auto-stack>
                <template v-for="item in items">
                    <custom-redirect :href="item.href">
                        <custom-naive-button :icon="item.icon">{{ item.name }}</custom-naive-button>
                    </custom-redirect>
                </template>
            </custom-naive-auto-stack>
        </n-card>
    </template>
</template>