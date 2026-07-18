<script lang="ts" setup>
    const { isMobile } = useResponsive();
</script>

<template>
    <n-element :class="['container mx-auto', { 'p-2': isMobile, 'py-10': !isMobile }]">
        <slot />
    </n-element>
</template>