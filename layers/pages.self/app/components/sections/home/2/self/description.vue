<script lang="ts" setup>
    const show = ref(false);

    const handleClick = () => {
        show.value = true;
    };

    const handlePointerLeave = () => {
        show.value = false;
    };
</script>

<template>
    <n-element
        :class="[
            'transition-(property-filter duration-500 ease-in-out)',
            { 'blur-6 hover:cursor-pointer': !show },
        ]"
        @click="handleClick"
        @pointerleave="handlePointerLeave"
    >
        <SectionsSelfDescription />
    </n-element>
</template>