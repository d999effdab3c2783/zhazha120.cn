<script lang="ts" setup>
    import { NElement, NScrollbar } from "naive-ui";

    defineOptions({
        name: "CustomNaiveHorizontalScroll",
    });
</script>

<template>
    <n-scrollbar data-lenis-prevent v-bind="$attrs" x-scrollable>
        <n-element class="min-w-max">
            <slot />
        </n-element>
    </n-scrollbar>
</template>