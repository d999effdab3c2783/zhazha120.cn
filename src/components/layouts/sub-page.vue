<script lang="ts" setup>
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import SharedSubPageHeader from "@/components/shared/sub-page-header.vue";
    import { NElement } from "naive-ui";

    defineOptions({
        name: "LayoutsSubPage",
    });
</script>

<template>
    <n-element class="zhazha120__page min-h-screen">
        <custom-naive-vertical-stack>
            <shared-sub-page-header />

            <slot />
        </custom-naive-vertical-stack>
    </n-element>
</template>