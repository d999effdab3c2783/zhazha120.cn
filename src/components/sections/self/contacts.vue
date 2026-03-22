<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import { useDatabase } from "@/composables/database";
    import type SelfContact from "@/database/tables/self_contact";
    import { NButtonGroup, NCard, NElement } from "naive-ui";
    import { isEmptyish, isNonNullish } from "remeda";
    import CustomMarkdown from "@/components/custom/markdown/index.vue";
    import CustomNaiveModalWrapper from "@/components/custom/naive/modal-wrapper.vue";

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
                    <n-button-group>
                        <custom-redirect :href="item.href">
                            <custom-naive-button :icon="item.icon">{{
                                item.name
                            }}</custom-naive-button>
                        </custom-redirect>

                        <template v-if="isNonNullish(item.tip)">
                            <custom-naive-modal-wrapper preset="card" title="提示" size="small">
                                <template #trigger="{ toggle }">
                                    <custom-naive-button
                                        @click="toggle"
                                        class="px-2"
                                        icon="i-ant-design:question-circle-outlined"
                                    />
                                </template>

                                <n-element>
                                    <custom-markdown :raw="item.tip" />
                                </n-element>
                            </custom-naive-modal-wrapper>
                        </template>
                    </n-button-group>
                </template>
            </custom-naive-auto-stack>
        </n-card>
    </template>
</template>