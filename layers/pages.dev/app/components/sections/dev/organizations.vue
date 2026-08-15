<script lang="ts" setup>
    const appConfig = useAppConfig();
    const { isMobile } = useResponsive();
</script>

<template>
    <n-flex :vertical="isMobile" size="small">
        <template v-for="organization in appConfig.dev.organizations">
            <naive-redirector-wrapper :href="organization.href">
                <template #default="{ href, redirect }">
                    <n-button
                        :block="isMobile"
                        :href="href"
                        size="small"
                        tag="a"
                        @click.prevent="redirect"
                    >
                        <template #icon>
                            <n-image :src="organization.avatar.href" preview-disabled />
                        </template>

                        {{ guessLocale(organization.name) }}
                    </n-button>
                </template>

                <template #extra>
                    <n-flex align="center" justify="center" size="small">
                        <n-image :src="organization.avatar.href" class="size-10" />
                        <n-text>{{ guessLocale(organization.name) }}</n-text>
                    </n-flex>
                </template>
            </naive-redirector-wrapper>
        </template>
    </n-flex>
</template>