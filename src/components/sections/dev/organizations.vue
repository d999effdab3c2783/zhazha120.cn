<script lang="ts" setup>
    import CustomNaivePosition from "@/components/custom/naive/position.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import { useDatabase, useDatabaseFile, useDatabaseValue } from "@/composables/database";
    import type DevOrganization from "@/database/tables/dev_organization";
    import { isMobile } from "@/shared/responsive";
    import { NAvatar, NCard } from "naive-ui";
    import { isEmptyish, isNonNullish, isNullish, merge } from "remeda";
    import { computed } from "vue";

    defineOptions({
        name: "SectionsDevOrganizations",
    });

    const items = useDatabase<DevOrganization[]>(async (database) => {
        return database.dev_organizations.toArray();
    });

    const mappedItems = computed(() => {
        if (isNullish(items.value)) {
            return;
        }

        return items.value.map((item) => {
            return merge(item, {
                real_avatar: useDatabaseFile(useDatabaseValue(item, "avatar")),
            });
        });
    });
</script>

<template>
    <template v-if="!isEmptyish(items) && !isEmptyish(mappedItems)">
        <n-card size="small" title="加入的组织">
            <custom-naive-position :placement="isMobile ? 'center' : 'center-left'">
                <template v-for="item in mappedItems">
                    <custom-redirect :href="item.href">
                        <template v-if="isNonNullish(item.real_avatar)">
                            <n-avatar :src="item.real_avatar" />
                        </template>
                    </custom-redirect>
                </template>
            </custom-naive-position>
        </n-card>
    </template>
</template>