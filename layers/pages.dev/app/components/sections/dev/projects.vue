<script lang="ts" setup>
    import projectsConfig from "#layers/pages.dev/config/projects";

    const { isMobile } = useResponsive();
</script>

<template>
    <n-flex :vertical="isMobile" size="small">
        <template v-for="{ name, href } in projectsConfig">
            <naive-redirector-wrapper #="{ href, redirect }" :href="href">
                <n-button
                    :block="isMobile"
                    :href="href"
                    size="small"
                    tag="a"
                    @click.prevent="redirect"
                >
                    {{ guessLocale(name) }}
                </n-button>
            </naive-redirector-wrapper>
        </template>
    </n-flex>
</template>