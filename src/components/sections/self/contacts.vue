<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import { useDatabase } from "@/composables/database";
    import type SelfContact from "@/database/tables/self_contact";
    import { NCard } from "naive-ui";
    import { isEmptyish } from "remeda";
    import CustomMarkdown from "@/components/custom/markdown/index.vue";

    defineOptions({
        name: "SectionsSelfContacts",
    });

    const items = useDatabase<SelfContact[]>(async (database) => {
        return database.self_contacts.toArray();
    });
</script>

<template>
    <template v-if="!isEmptyish(items)">
        <n-card size="small" title="找到我">
            <custom-naive-auto-stack>
                <template v-for="item in items">
                    <custom-redirect :href="item.href">
                        <custom-naive-button :icon="item.icon">{{ item.name }}</custom-naive-button>

                        <template #extra>
                            <custom-markdown :raw="item.tip" />
                        </template>
                    </custom-redirect>
                </template>
            </custom-naive-auto-stack>
        </n-card>
    </template>
</template>