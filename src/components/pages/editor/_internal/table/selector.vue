<script lang="ts" setup>
    import type { Dexie } from "dexie";
    import { type MenuOption, NDivider, NFlex, NMenu } from "naive-ui";
    import { computed } from "vue";

    const props = defineProps<{
        readonly database: Dexie;
    }>();

    const emits = defineEmits<{
        (event: "select", name: string): void;
    }>();

    const options = computed<MenuOption[]>(() => {
        return props.database.tables.map((table) => {
            return {
                label: table.name,
                key: table.name,
            } satisfies MenuOption;
        });
    });

    const handleSelect = async (name: string) => {
        emits("select", name);
    };
</script>

<template>
    <n-flex :size="0" vertical>
        <n-divider>表 ({{ database.tables.length }})</n-divider>
        <n-menu :options="options" mode="vertical" @update:value="handleSelect" />
    </n-flex>
</template>