<script lang="ts" setup>
    import { NInputNumber } from "naive-ui";

    defineProps<{
        readonly value: number;
    }>();

    const emits = defineEmits<{
        (event: "update:value", value: number | null): void;
    }>();

    const handleUpdateValue = async (newValue: number | null) => {
        emits("update:value", newValue);
    };
</script>

<template>
    <n-input-number :value="value" @update:value="handleUpdateValue" />
</template>