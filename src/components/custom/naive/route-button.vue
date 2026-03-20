<script lang="ts" setup>
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import { isNonNullish } from "remeda";
    import type { RouteLocationRaw } from "vue-router";

    defineOptions({
        name: "CustomNaiveRouteButton",
        inheritAttrs: false,
    });

    defineProps<{
        readonly to: RouteLocationRaw;
    }>();
</script>

<template>
    <router-link #="{ route, href }" :to="to" custom>
        <template v-if="$route.fullPath !== route.fullPath">
            <custom-redirect :href="href">
                <custom-naive-button :href="href" v-bind="$attrs">
                    <template v-if="isNonNullish(route.name)">{{ route.name }}</template>
                    <template v-else>?</template>
                </custom-naive-button>
            </custom-redirect>
        </template>
    </router-link>
</template>