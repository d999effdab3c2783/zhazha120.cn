<script lang="ts" setup>
    import { NButton, NIcon } from "naive-ui";
    import { isNonNullish } from "remeda";

    defineOptions({
        name: "CustomNaiveButton",
    });

    defineProps<{
        readonly icon?: string;
    }>();
</script>

<template>
    <n-button v-bind="$attrs">
        <template v-if="isNonNullish($slots.icon) || isNonNullish(icon)" #icon>
            <slot name="icon">
                <n-icon :class="icon" />
            </slot>
        </template>

        <slot />
    </n-button>
</template>