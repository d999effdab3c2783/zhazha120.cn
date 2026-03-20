<script lang="ts" setup>
    import SectionsHomeTabs from "@/components/sections/home/tabs/index.vue";
    import { NElement } from "naive-ui";

    defineOptions({
        name: "SectionsHome2",
    });
</script>

<template>
    <n-element class="relative zhazha120__page min-h-screen">
        <sections-home-tabs />
    </n-element>
</template>

<style lang="scss">
    @use "@/styles/zhazha120";
</style>