<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
    </NuxtLayout>
</template>

<style lang="scss">
    @use "@unocss/reset/sanitize/sanitize.css";
    @use "@unocss/reset/sanitize/assets.css";

    @font-face {
        font-family: "v-zhazha120-script";
        src: local("YoZai");
        font-display: swap;
    }

    @font-face {
        font-family: "v-zhazha120-sans";
        src: local("DingTalk JinBuTi"), local("HarmonyOS Sans SC");
        font-display: swap;
    }

    :root {
        @apply font-[v-zhazha120-sans];
    }
</style>