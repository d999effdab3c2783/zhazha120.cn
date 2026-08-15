<script lang="ts" setup>
    const appConfig = useAppConfig();
    const { isMobile } = useResponsive();
</script>

<template>
    <n-flex :vertical="isMobile" size="small">
        <template v-for="group in appConfig.dev.stacks">
            <n-card :title="guessLocale(group.name)" size="small">
                <n-flex :vertical="isMobile" size="small">
                    <template v-for="stack in group.items">
                        <naive-redirector-wrapper #="{ href, redirect }" :href="stack.href">
                            <n-button
                                :block="isMobile"
                                :href="href"
                                size="small"
                                tag="a"
                                @click.prevent="redirect"
                            >
                                <template #icon>
                                    <n-icon :class="stack.icon" />
                                </template>

                                {{ guessLocale(stack.name) }}
                            </n-button>
                        </naive-redirector-wrapper>
                    </template>
                </n-flex>
            </n-card>
        </template>
    </n-flex>
</template>