<script lang="ts" setup>
    import { useThemeVars } from "naive-ui";

    const themeVars = useThemeVars();
</script>

<template>
    <n-element class="absolute top-0 left-0 size-full">
        <VueBitsDotGrid
            :active-color="themeVars.primaryColor"
            :base-color="themeVars.hoverColor"
            :dot-size="6"
            :gap="18"
        />
    </n-element>
</template>