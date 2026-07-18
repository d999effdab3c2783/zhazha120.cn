<script lang="ts" setup>
    defineOptions({
        inheritAttrs: false,
    });

    const props = defineProps<{
        readonly placement:
            | "top-left"
            | "top-center"
            | "top-right"
            | "center-left"
            | "center"
            | "center-right"
            | "bottom-left"
            | "bottom-center"
            | "bottom-right";
    }>();

    const justify = computed(() => {
        switch (props.placement) {
            case "top-left":
            case "center-left":
            case "bottom-left":
                return "start";
            case "top-center":
            case "center":
            case "bottom-center":
                return "center";
            case "top-right":
            case "center-right":
            case "bottom-right":
                return "end";
        }
    });

    const align = computed(() => {
        switch (props.placement) {
            case "top-left":
            case "top-center":
            case "top-right":
                return "start";
            case "center-left":
            case "center":
            case "center-right":
                return "center";
            case "bottom-left":
            case "bottom-center":
            case "bottom-right":
                return "end";
        }
    });
</script>

<template>
    <n-flex :align="align" :justify="justify" size="small" v-bind="$attrs">
        <slot />
    </n-flex>
</template>