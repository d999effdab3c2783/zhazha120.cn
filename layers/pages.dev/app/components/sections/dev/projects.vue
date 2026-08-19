<script lang="ts" setup>
    import projectsConfig from "#layers/pages.dev/config/projects";

    const { isMobile } = useResponsive();
</script>

<template>
    <n-flex :vertical="isMobile" size="small">
        <template v-for="{ name, href } in projectsConfig">
            <naive-redirector-wrapper #="{ aProps, redirect }" :href="href">
                <n-button
                    :block="isMobile"
                    size="small"
                    tag="a"
                    v-bind="aProps"
                    @click.prevent="redirect"
                >
                    {{ guessLocale(name) }}
                </n-button>
            </naive-redirector-wrapper>
        </template>
    </n-flex>
</template>