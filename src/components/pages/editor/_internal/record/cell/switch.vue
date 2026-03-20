<script lang="ts" setup>
    import { NSwitch } from "naive-ui";

    defineProps<{
        readonly value: boolean;
    }>();
</script>

<template>
    <n-switch :value="value" disabled />
</template>