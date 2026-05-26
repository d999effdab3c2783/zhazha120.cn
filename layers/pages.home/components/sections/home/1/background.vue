<script lang="ts" setup>
    import { useThemeVars } from "naive-ui";

    const themeVars = useThemeVars();
</script>

<template>
    <VueBitsDotGrid
        :active-color="themeVars.primaryColor"
        :base-color="themeVars.hoverColor"
        :dot-size="6"
        :gap="18"
    />
</template>