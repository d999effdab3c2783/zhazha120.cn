<script lang="ts" setup>
    const router = useRouter();

    const title = useTitle(null, {
        observe: true,
    });

    const handleBack = () => {
        if (history.length > 1) {
            router.back();
            return;
        }

        navigateTo({
            path: "/",
        });
    };
</script>

<template>
    <NuxtLayout name="default">
        <NuxtLayout name="container">
            <n-flex size="large" vertical>
                <n-page-header
                    :title="String(title ?? $route.name ?? $route.fullPath)"
                    @back="handleBack"
                />

                <n-element>
                    <slot />
                </n-element>
            </n-flex>
        </NuxtLayout>
    </NuxtLayout>
</template>