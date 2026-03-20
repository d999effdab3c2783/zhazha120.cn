<script lang="ts" setup>
    import Color from "colorjs.io";
    import { NElement } from "naive-ui";
    import { computed } from "vue";

    const props = defineProps<{
        readonly value: string;
    }>();

    const textColor = computed(() => {
        const color = new Color(props.value);

        if (color.luminance > 0.5) {
            return "#000000";
        }

        return "#ffffff";
    });
</script>

<template>
    <n-element :style="{ backgroundColor: value, color: textColor }" class="p-2 rounded-xs">
        {{ value }}
    </n-element>
</template>