<script lang="ts" setup>
    import { isNonNullish } from "remeda";

    const appConfig = useAppConfig();
    const { isMobile } = useResponsive();
</script>

<template>
    <n-flex align="center" size="small">
        <template v-for="{ icon, name, href, comment } in appConfig.self.contacts">
            <NaiveRedirectorWrapper :href="href">
                <template #default="{ href, redirect }">
                    <n-button :block="isMobile" :href="href" tag="a" @click.prevent="redirect">
                        <template #icon>
                            <n-icon :class="icon" />
                        </template>

                        {{ name }}
                    </n-button>
                </template>

                <template v-if="isNonNullish(comment)" #extra>
                    <n-element class="text-center whitespace-pre">
                        <n-text type="info">{{ comment }}</n-text>
                    </n-element>
                </template>
            </NaiveRedirectorWrapper>
        </template>
    </n-flex>
</template>