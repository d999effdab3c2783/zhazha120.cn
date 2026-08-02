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
                <n-page-header @back="handleBack">
                    <template #title>
                        <n-breadcrumb>
                            <template
                                v-for="part in String(
                                    title ?? $route.name ?? $route.fullPath,
                                ).split('|')"
                            >
                                <n-breadcrumb-item>{{ part.trim() }}</n-breadcrumb-item>
                            </template>
                        </n-breadcrumb>
                    </template>
                </n-page-header>

                <n-element>
                    <slot />
                </n-element>
            </n-flex>
        </NuxtLayout>
    </NuxtLayout>
</template>