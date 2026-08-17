<script lang="ts" setup>
    import type { Channel } from "#layers/pages.support/app/types/support";

    defineProps<{
        readonly channel: Channel;
    }>();
</script>

<template>
    <n-flex size="small" vertical>
        <template v-for="method in channel.methods">
            <template v-if="method.type === 'external'">
                <SectionsSupportMethodExternal :method="method" />
            </template>

            <template v-if="method.type === 'qrcode'">
                <SectionsSupportMethodQrcode :method="method" />
            </template>
        </template>
    </n-flex>
</template>