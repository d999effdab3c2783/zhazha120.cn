<script lang="ts" setup>
    import { isNonNullish } from "remeda";

    const appConfig = useAppConfig();
    const { isMobile } = useResponsive();
</script>

<template>
    <n-flex :vertical="isMobile" align="center" size="small">
        <template v-for="friendLink in appConfig.misc.friend_links">
            <naive-redirector-wrapper :href="friendLink.href">
                <template #default="{ href, redirect }">
                    <n-button
                        :block="isMobile"
                        :href="href"
                        class="h-full py-2"
                        size="small"
                        tag="a"
                        @click.prevent="redirect"
                    >
                        <template #icon>
                            <n-image :src="friendLink.logo.href" preview-disabled />
                        </template>

                        <n-flex :size="0" align="start" class="w-full" vertical>
                            <n-text class="text-current">{{ friendLink.name }}</n-text>

                            <template v-if="isNonNullish(friendLink.description)">
                                <n-ellipsis>
                                    <n-text :depth="3" class="text-[.8em]">
                                        {{ friendLink.description }}
                                    </n-text>
                                </n-ellipsis>
                            </template>
                        </n-flex>
                    </n-button>
                </template>

                <template #extra>
                    <n-flex align="center" size="small" vertical>
                        <n-flex align="center" justify="center" size="small">
                            <n-image :src="friendLink.logo.href" class="h-10" />
                            <n-text>{{ friendLink.name }}</n-text>
                        </n-flex>

                        <template v-if="isNonNullish(friendLink.description)">
                            <n-element class="text-wrap">
                                <n-text :depth="3">{{ friendLink.description }}</n-text>
                            </n-element>
                        </template>
                    </n-flex>
                </template>
            </naive-redirector-wrapper>
        </template>
    </n-flex>
</template>