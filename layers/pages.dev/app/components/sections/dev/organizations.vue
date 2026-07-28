<script lang="ts" setup>
    const appConfig = useAppConfig();
    const { isMobile } = useResponsive();
</script>

<template>
    <n-flex :vertical="isMobile" size="small">
        <template v-for="organization in appConfig.dev.organizations">
            <naive-redirector-wrapper #="{ href, redirect }" :href="organization.href">
                <n-button
                    :block="isMobile"
                    :href="href"
                    size="small"
                    tag="a"
                    @click.prevent="redirect"
                >
                    <template #icon>
                        <n-image :src="organization.avatar.href" />
                    </template>

                    {{ organization.name }}
                </n-button>
            </naive-redirector-wrapper>
        </template>
    </n-flex>
</template>