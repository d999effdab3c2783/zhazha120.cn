<script lang="ts" setup>
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import type { RecordObject } from "@/types/shared";
    import type { Table } from "dexie";
    import { NPopconfirm } from "naive-ui";

    const props = defineProps<{
        readonly table: Table;
        readonly record: RecordObject;
    }>();

    const handle = async () => {
        await props.table.delete(props.record[props.table.schema.primKey.name]);
    };
</script>

<template>
    <n-popconfirm @positive-click="handle">
        <template #trigger>
            <custom-naive-button icon="i-ant-design:delete-outlined" size="small" type="error"
                >删除</custom-naive-button
            >
        </template>

        确认删除吗
    </n-popconfirm>
</template>