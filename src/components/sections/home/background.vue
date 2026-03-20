<script lang="ts" setup>
    import CustomVueBitsDotGrid from "@/components/custom/vue-bits/dot-grid.vue";
    import { useThemeStore } from "@/stores/theme";
    import { usePageLeave } from "@vueuse/core";
    import { NElement } from "naive-ui";
    import { isNonNullish } from "remeda";

    defineOptions({
        name: "SectionsHomeBackground",
    });

    const themeStore = useThemeStore();

    const pageLeave = usePageLeave();
</script>

<template>
    <n-element class="absolute top-0 left-0 size-full">
        <template
            v-if="
                isNonNullish(themeStore.primaryColors) &&
                isNonNullish(themeStore.surfaceColors) &&
                !pageLeave
            "
        >
            <custom-vue-bits-dot-grid
                :active-color="themeStore.primaryColors[5]"
                :base-color="themeStore.surfaceColors[2]"
                :dot-size="6"
                :gap="20"
            />
        </template>
    </n-element>
</template>