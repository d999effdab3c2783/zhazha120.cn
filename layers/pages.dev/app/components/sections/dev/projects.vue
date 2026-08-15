<script lang="ts" setup>
    const appConfig = useAppConfig();
    const { isMobile } = useResponsive();
</script>

<template>
    <n-flex :vertical="isMobile" size="small">
        <template v-for="project in appConfig.dev.projects">
            <naive-redirector-wrapper #="{ href, redirect }" :href="project.href">
                <n-button
                    :block="isMobile"
                    :href="href"
                    size="small"
                    tag="a"
                    @click.prevent="redirect"
                >
                    {{ guessLocale(project.name) }}
                </n-button>
            </naive-redirector-wrapper>
        </template>
    </n-flex>
</template>