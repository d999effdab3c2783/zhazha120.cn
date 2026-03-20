<script lang="ts" setup>
    import { NSwitch } from "naive-ui";

    defineProps<{
        readonly value: boolean;
    }>();

    const emits = defineEmits<{
        (event: "update:value", value: boolean): void;
    }>();

    const handleUpdateValue = async (newValue: boolean) => {
        emits("update:value", newValue);
    };
</script>

<template>
    <n-switch :round="false" :value="value" @update:value="handleUpdateValue" />
</template>