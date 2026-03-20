<script lang="ts" setup>
    import DatabaseActions from "@/components/pages/editor/_internal/database/actions/index.vue";
    import DatabaseSwitcher from "@/components/pages/editor/_internal/database/switcher.vue";
    import TableContent from "@/components/pages/editor/_internal/table/index.vue";
    import TableSelector from "@/components/pages/editor/_internal/table/selector.vue";
    import { useRouteQuery } from "@vueuse/router";
    import type { Dexie, Table } from "dexie";
    import { NFlex, NLayout, NLayoutContent, NLayoutSider } from "naive-ui";
    import { isNonNullish, isNullish } from "remeda";
    import { shallowRef, watch } from "vue";

    const props = defineProps<{
        readonly database: Dexie;
    }>();

    const emits = defineEmits<{
        (event: "import", database: Dexie): void;
    }>();

    const queryTable = useRouteQuery<string | undefined>("table");

    const table = shallowRef<Table>();

    watch(
        queryTable,
        (newQueryTable) => {
            if (isNullish(newQueryTable) || newQueryTable === "") {
                return;
            }

            const databaseTable = props.database.table(newQueryTable);

            if (isNullish(databaseTable)) {
                return;
            }

            table.value = databaseTable;
        },
        {
            immediate: true,
        },
    );

    watch(table, (newTable) => {
        if (isNullish(newTable)) {
            queryTable.value = undefined;
            return;
        }

        queryTable.value = newTable.name;
    });

    const handleSwitch = async (database: Dexie) => {
        emits("import", database);

        watch(
            () => props.database,
            async () => {
                if (isNonNullish(table.value)) {
                    table.value = database.table(table.value.name);
                }
            },
            {
                once: true,
            },
        );
    };

    const handleTableSelect = (name: string) => {
        table.value = props.database.table(name);
    };
</script>

<template>
    <n-layout content-class="min-h-screen" has-sider>
        <n-layout-sider content-class="pt-2">
            <n-flex size="small" vertical>
                <database-switcher :database="database" @switch="handleSwitch" />
                <database-actions :database="database" @import="handleSwitch" />

                <table-selector :database="database" @select="handleTableSelect" />
            </n-flex>
        </n-layout-sider>

        <n-layout content-class="p-2">
            <n-layout-content>
                <template v-if="isNonNullish(table)">
                    <table-content :table="table" />
                </template>
            </n-layout-content>
        </n-layout>
    </n-layout>
</template>