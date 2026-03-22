<script lang="ts" setup>
    import CustomVueBitsTargetCursor from "@/components/custom/vue-bits/target-cursor.vue";
    import { useHasOverlay } from "@/composables/container";
    import { useMouse, usePageLeave } from "@vueuse/core";

    defineOptions({
        name: "SectionsHomeCursor",
    });

    const mouse = useMouse();
    const pageLeave = usePageLeave();
    const hasOverlay = useHasOverlay();

    const selectors = [
        ".n-avatar",
        ".n-text",
        ".n-button",
        '[class*="__icon"]',
        ".n-tabs-tab",
        ".n-card",
        ".n-image",
        ".n-a",
        ".n-tag",
        ".n-h4",
    ];
</script>

<template>
    <template v-if="!hasOverlay && mouse.sourceType.value === 'mouse' && !pageLeave">
        <custom-vue-bits-target-cursor :target-selector="selectors.join(', ')" />
    </template>
</template>