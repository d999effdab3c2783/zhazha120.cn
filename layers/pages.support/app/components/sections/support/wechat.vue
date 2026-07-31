<script lang="ts" setup>
    const appConfig = useAppConfig();
    const { isMobile } = useResponsive();

    const qrcode = new URL("../../../assets/wechat.bin", import.meta.url).toString();
</script>

<template>
    <n-flex :vertical="isMobile" align="center" justify="center" size="small">
        <n-image :src="qrcode" />

        <n-card size="small" title="回退">
            <n-flex :vertical="isMobile" align="center" justify="center" size="large">
                <n-flex align="center" size="small" vertical>
                    <n-qr-code
                        :icon-src="appConfig.self.avatar.src"
                        :size="appConfig.support.fallback_qrcode_size"
                        :value="appConfig.support.wechat"
                        class="box-content"
                        icon-background-color="transparent"
                    />

                    <n-text>支付</n-text>
                </n-flex>
            </n-flex>
        </n-card>
    </n-flex>
</template>