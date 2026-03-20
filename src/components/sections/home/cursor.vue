<script lang="ts" setup>
    import CustomVueBitsTargetCursor from "@/components/custom/vue-bits/target-cursor.vue";
    import { useHasOverlay } from "@/composables/container";
    import { useMouse, usePageLeave } from "@vueuse/core";
    import { ref } from "vue";

    defineOptions({
        name: "SectionsHomeCursor",
    });

    const mouse = useMouse();
    const pageLeave = usePageLeave();

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

    const show = ref(true);

    useHasOverlay((state) => {
        show.value = !state;
    });
</script>

<template>
    <template v-if="show && mouse.sourceType.value === 'mouse' && !pageLeave">
        <custom-vue-bits-target-cursor :target-selector="selectors.join(', ')" />
    </template>
</template>