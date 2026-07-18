<script lang="ts" setup>
    const router = useRouter();

    const handleBack = () => {
        if (history.length > 1) {
            router.back();
            return;
        }

        navigateTo({
            name: "首页",
        });
    };
</script>

<template>
    <NuxtLayout name="default">
        <NuxtLayout name="container">
            <n-flex size="small" vertical>
                <n-page-header :title="String($route.name ?? $route.fullPath)" @back="handleBack" />

                <n-element>
                    <slot />
                </n-element>
            </n-flex>
        </NuxtLayout>
    </NuxtLayout>
</template>