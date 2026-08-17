<script lang="ts" setup>
    const stacks = useStacks();
    const { isMobile } = useResponsive();
</script>

<template>
    <n-flex :vertical="isMobile" size="small">
        <template v-for="{ name, items } in stacks">
            <n-card :title="guessLocale(name)" size="small">
                <n-flex :vertical="isMobile" size="small">
                    <template v-for="{ icon, name, href } in items">
                        <naive-redirector-wrapper #="{ href, redirect }" :href="href">
                            <n-button
                                :block="isMobile"
                                :href="href"
                                size="small"
                                tag="a"
                                @click.prevent="redirect"
                            >
                                <template #icon>
                                    <n-icon :class="icon" />
                                </template>

                                {{ guessLocale(name) }}
                            </n-button>
                        </naive-redirector-wrapper>
                    </template>
                </n-flex>
            </n-card>
        </template>
    </n-flex>
</template>