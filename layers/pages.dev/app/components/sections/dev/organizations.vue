<script lang="ts" setup>
    const organizations = useOrganizations();
    const { isMobile } = useResponsive();
</script>

<template>
    <n-flex :vertical="isMobile" size="small">
        <template v-for="{ avatar, name, href } in organizations">
            <naive-redirector-wrapper :href="href">
                <template #default="{ href, redirect }">
                    <n-button
                        :block="isMobile"
                        :href="href"
                        size="small"
                        tag="a"
                        @click.prevent="redirect"
                    >
                        <template #icon>
                            <n-image :src="avatar" preview-disabled />
                        </template>

                        {{ guessLocale(name) }}
                    </n-button>
                </template>

                <template #extra>
                    <n-flex align="center" justify="center" size="small">
                        <n-image :src="avatar" class="size-10" />
                        <n-text>{{ guessLocale(name) }}</n-text>
                    </n-flex>
                </template>
            </naive-redirector-wrapper>
        </template>
    </n-flex>
</template>