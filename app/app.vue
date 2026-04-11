<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="scss">
    @use "@unocss/reset/sanitize/sanitize.css";
    @use "@unocss/reset/sanitize/assets.css";

    :root {
        @apply font-sans;
    }
</style>