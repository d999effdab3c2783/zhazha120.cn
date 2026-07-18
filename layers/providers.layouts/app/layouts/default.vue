<template>
    <NuxtLayout name="wrapper">
        <n-layout>
            <n-layout-content class="min-h-screen">
                <slot />
            </n-layout-content>

            <n-layout-footer class="p-2">
                <SectionsLayoutFooter />
            </n-layout-footer>
        </n-layout>
    </NuxtLayout>
</template>