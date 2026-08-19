<script lang="ts" setup>
    import { isNonNullish } from "remeda";
    import { FriendLinkStatuses } from "#layers/pages.misc/app/enums/FriendLink";

    const { isMobile } = useResponsive();
    const friendLinks = useFriendLinks();

    const handleLink = (href: string) => href.replaceAll("{domain}", location.host);
</script>

<template>
    <n-flex :vertical="isMobile" align="center" size="small">
        <template v-for="{ status, logo, name, description, href } in friendLinks">
            <naive-redirector-wrapper
                :href="handleLink(href)"
                :rel="status === FriendLinkStatuses.DEAD ? ['nofollow'] : []"
            >
                <template #default="{ aProps, redirect }">
                    <n-button
                        :block="isMobile"
                        :secondary="status === FriendLinkStatuses.DEAD"
                        class="h-full py-2"
                        size="small"
                        tag="a"
                        v-bind="aProps"
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

                        <template v-if="status === FriendLinkStatuses.DEAD">
                            <n-alert class="w-full" type="error">可能已经无法访问</n-alert>
                        </template>
                    </n-flex>
                </template>
            </naive-redirector-wrapper>
        </template>
    </n-flex>
</template>