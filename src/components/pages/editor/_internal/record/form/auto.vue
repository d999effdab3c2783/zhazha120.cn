<script lang="ts" setup>
    import NumberControl from "@/components/pages/editor/_internal/record/form/number.vue";
    import TextControl from "@/components/pages/editor/_internal/record/form/text.vue";
    import { isNumber, isString } from "remeda";

    defineProps<{
        readonly value: string | number;
    }>();
</script>

<template>
    <template v-if="isString(value)">
        <text-control :value="value" disabled readonly />
    </template>

    <template v-if="isNumber(value)">
        <number-control :value="value" disabled readonly />
    </template>
</template>