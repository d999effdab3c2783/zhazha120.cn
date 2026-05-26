<script lang="ts" setup>
    const show = ref(false);

    const handleCardClick = () => {
        show.value = true;
    };
</script>

<template>
    <n-card
        :class="{ 'blur-6 hover:cursor-pointer': !show }"
        class="transition-(property-filter duration-500 ease-in-out)"
        size="small"
        @click="handleCardClick"
    >
        <SectionsSelfDescription />
    </n-card>
</template>