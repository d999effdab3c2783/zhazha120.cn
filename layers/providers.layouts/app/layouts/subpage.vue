<script lang="ts" setup>
    const appConfig = useAppConfig();
    const router = useRouter();
    const breadcrumb = useBreadcrumb();

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
                            <template v-for="{ name, path } in breadcrumb.items.value">
                                <naive-redirector-wrapper #="{ href, redirect }" :href="path">
                                    <n-breadcrumb-item :href="href" @click.prevent="redirect">
                                        {{ name }}
                                    </n-breadcrumb-item>
                                </naive-redirector-wrapper>
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