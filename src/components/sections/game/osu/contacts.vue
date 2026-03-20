<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import { useDatabase } from "@/composables/database";
    import type OsuContact from "@/database/tables/osu_contact";
    import { NCard } from "naive-ui";
    import { isEmptyish } from "remeda";

    defineOptions({
        name: "SectionsGameOsuContacts",
    });

    const items = useDatabase<OsuContact[]>(async (database) => {
        return database.osu_contacts.toArray();
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