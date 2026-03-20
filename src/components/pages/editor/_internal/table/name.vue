<script lang="ts" setup>
    import { computedAsync } from "@vueuse/core";
    import type { Table } from "dexie";
    import { NText } from "naive-ui";

    const props = defineProps<{
        readonly table: Table;
        readonly filteredCount: number;
    }>();

    const count = computedAsync(async () => {
        return await props.table.count();
    }, 0);
</script>

<template>
    <n-text class="fw-bold"
        >{{ table.name }} ({{ filteredCount > -1 ? filteredCount : count }})</n-text
    >
</template>