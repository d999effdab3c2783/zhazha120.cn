<script setup lang="ts">
    const appConfig = useAppConfig();
</script>

<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <VueLenis root :options="appConfig.lenis" />
        <NuxtPage />
    </NuxtLayout>
</template>