<script lang="ts" setup>
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import type { Dexie, Table } from "dexie";
    import { NPopconfirm } from "naive-ui";

    const props = defineProps<{
        readonly table: Table;
    }>();

    const handle = async () => {
        await Promise.all(
            Object.entries(
                import.meta.glob<{
                    default: (database: Dexie) => Promise<void>;
                }>("@/database/seeders/*"),
            ).map(async ([path, loadModule]) => {
                const module = await loadModule();

                if (path.includes(`/${props.table.name}.`)) {
                    await module.default(props.table.db);
                }
            }),
        );
    };
</script>

<template>
    <n-popconfirm @positive-click="handle">
        <template #trigger>
            <custom-naive-button
                icon="i-ant-design:folder-add-outlined"
                secondary
                size="small"
                type="success"
                >填充</custom-naive-button
            >
        </template>

        确认填充吗
    </n-popconfirm>
</template>