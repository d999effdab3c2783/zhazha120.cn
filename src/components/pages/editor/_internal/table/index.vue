<script lang="ts" setup>
    import Actions from "@/components/pages/editor/_internal/record/actions/index.vue";
    import RecordCell from "@/components/pages/editor/_internal/record/cell/index.vue";
    import TableActions from "@/components/pages/editor/_internal/table/actions/index.vue";
    import TableName from "@/components/pages/editor/_internal/table/name.vue";
    import Search from "@/components/pages/editor/_internal/table/search.vue";
    import filter, { FilterError } from "@/database/filter";
    import { liveQuery, type Table } from "dexie";
    import {
        type DataTableColumn,
        type DataTableRowData,
        NCard,
        NDataTable,
        NFlex,
    } from "naive-ui";
    import { isNonNullish, isNullish, prop, unique } from "remeda";
    import { computed, h, ref, watch } from "vue";

    const props = defineProps<{
        readonly table: Table;
    }>();

    const query = ref<string>();

    const columns = computed<DataTableColumn[]>(() => {
        if (isNullish(data.value)) {
            return [];
        }

        const schemas = [props.table.schema.primKey, ...props.table.schema.indexes];

        const keys = unique([
            ...schemas.map(prop("name")),
            ...data.value.flatMap((item) => {
                return Object.keys(item);
            }),
        ]);

        const tableColumns = keys.map((name) => {
            return {
                title: schemas.some((index) => {
                    return name === index.name;
                })
                    ? `~${name}`
                    : name,
                key: name,

                render: (data) => {
                    return h(RecordCell, {
                        record: data,
                        value: data[name],
                    });
                },
            } satisfies DataTableColumn;
        });

        return [
            ...tableColumns,

            {
                title: "操作",
                key: "actions",

                render: (data) =>
                    h(Actions, {
                        table: props.table,
                        record: data,
                    }),
            },
        ];
    });

    const loading = ref(false);
    const data = ref<DataTableRowData[]>();
    const filterError = ref<FilterError | null>(null);

    watch(
        [() => props.table, query],
        ([newTable, newQuery], _oldValues, onCleanup) => {
            try {
                loading.value = true;
                data.value = [];

                const query = liveQuery(async () => {
                    filterError.value = null;

                    if (isNullish(newQuery)) {
                        return await newTable.toArray();
                    }

                    try {
                        return filter(await newTable.toArray(), newQuery);
                    } catch (error) {
                        if (error instanceof FilterError) {
                            filterError.value = error;
                        }

                        return await newTable.toArray();
                    }
                });

                const subscriber = query.subscribe(async (newData) => {
                    data.value = newData;
                });

                onCleanup(async () => {
                    subscriber.unsubscribe();
                });
            } finally {
                loading.value = false;
            }
        },
        {
            immediate: true,
        },
    );
</script>

<template>
    <n-card size="small">
        <template #header>
            <table-name :filtered-count="isNonNullish(data) ? data.length : -1" :table="table" />
        </template>

        <template #header-extra>
            <table-actions :table="table" />
        </template>

        <n-flex size="small" vertical>
            <search
                :error="filterError ?? null"
                :table="table"
                :value="query ?? ''"
                @update:value="(newQuery) => (query = newQuery)"
            />
            <n-data-table :columns="columns" :data="data" :loading="loading" />
        </n-flex>
    </n-card>
</template>