<script lang="ts" setup>
    import { NInput } from "naive-ui";

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
    <n-input :value="value" data-lenis-prevent type="textarea" @update:value="handleUpdateValue" />
</template>