<script lang="ts" setup>
    import { isNonNullish } from "remeda";

    const { isMobile } = useResponsive();
    const friendLinks = useFriendLinks();
</script>

<template>
    <n-flex :vertical="isMobile" align="center" size="small">
        <template v-for="{ logo, name, description, href, disabled } in friendLinks">
            <naive-redirector-wrapper :href="href">
                <template #default="{ href, redirect }">
                    <n-button
                        :block="isMobile"
                        :href="href"
                        :secondary="disabled"
                        class="h-full py-2"
                        size="small"
                        tag="a"
                        @click.prevent="redirect"
                    >
                        <template #icon>
                            <n-image :src="logo" preview-disabled />
                        </template>

                        <n-flex :size="0" align="start" class="w-full" vertical>
                            <n-text class="text-current">{{ name }}</n-text>

                            <template v-if="isNonNullish(description)">
                                <n-ellipsis>
                                    <n-text :depth="3" class="text-[.8em]">
                                        {{ description }}
                                    </n-text>
                                </n-ellipsis>
                            </template>
                        </n-flex>
                    </n-button>
                </template>

                <template #extra>
                    <n-flex align="center" size="small" vertical>
                        <n-flex align="center" justify="center" size="small">
                            <n-image :src="logo" class="h-10" />
                            <n-text>{{ name }}</n-text>
                        </n-flex>

                        <template v-if="isNonNullish(description)">
                            <n-element class="text-wrap">
                                <n-text :depth="3">{{ description }}</n-text>
                            </n-element>
                        </template>

                        <template v-if="disabled">
                            <n-text type="error">可能已经无法访问</n-text>
                        </template>
                    </n-flex>
                </template>
            </naive-redirector-wrapper>
        </template>
    </n-flex>
</template>