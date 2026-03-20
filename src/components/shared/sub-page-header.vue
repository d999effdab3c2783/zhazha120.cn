<script lang="ts" setup>
    import { useRouterNavigation } from "@/composables/router";
    import { NElement, NPageHeader } from "naive-ui";
    import { isString } from "remeda";

    const routerNavigation = useRouterNavigation();
</script>

<template>
    <n-element class="py-2">
        <n-page-header
            :title="isString($route.name) ? $route.name : $route.fullPath"
            @back="routerNavigation.back"
        />
    </n-element>
</template>