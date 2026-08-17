<script lang="ts" setup>
    import { isNonNullish } from "remeda";

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
                            <template v-for="({ name, path }, index) in breadcrumb.items.value">
                                <template
                                    v-if="
                                        isNonNullish(path) &&
                                        index !== breadcrumb.items.value.length - 1
                                    "
                                >
                                    <naive-redirector-wrapper #="{ href, redirect }" :href="path">
                                        <n-breadcrumb-item :href="href" @click.prevent="redirect">
                                            {{ name }}
                                        </n-breadcrumb-item>
                                    </naive-redirector-wrapper>
                                </template>

                                <template v-else>
                                    <n-breadcrumb-item :clickable="false">
                                        {{ name }}
                                    </n-breadcrumb-item>
                                </template>
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