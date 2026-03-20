<script lang="ts" setup>
    import DeleteAction from "@/components/pages/editor/_internal/record/actions/delete.vue";
    import EditAction from "@/components/pages/editor/_internal/record/actions/edit.vue";
    import type { RecordObject } from "@/types/shared";
    import type { Table } from "dexie";
    import { NFlex } from "naive-ui";

    defineProps<{
        readonly table: Table;
        readonly record: RecordObject;
    }>();
</script>

<template>
    <n-flex size="small">
        <edit-action :record="record" :table="table" />
        <delete-action :record="record" :table="table" />
    </n-flex>
</template>