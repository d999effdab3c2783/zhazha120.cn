<script lang="ts" setup>
    import { NColorPicker } from "naive-ui";

    defineProps<{
        readonly value: string;
    }>();

    const emits = defineEmits<{
        (event: "update:value", value: string): void;
    }>();

    const handleUpdateValue = async (newValue: string) => {
        emits("update:value", newValue);
    };
</script>

<template>
    <n-color-picker :modes="['hex']" :value="value" @update:value="handleUpdateValue" />
</template>