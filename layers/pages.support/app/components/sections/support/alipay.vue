<script lang="ts" setup>
    const appConfig = useAppConfig();
    const { isMobile } = useResponsive();

    const redPacket = new URL("../../../assets/alipay/red_packet.bin", import.meta.url).toString();
    const qrcode = new URL("../../../assets/alipay/pay.bin", import.meta.url).toString();
</script>

<template>
    <n-flex :vertical="isMobile" align="center" justify="center" size="small">
        <n-element class="flex-1">
            <n-image :src="redPacket" />
        </n-element>

        <n-element class="flex-1">
            <n-image :src="qrcode" />
        </n-element>

        <n-card size="small" title="回退">
            <n-flex :vertical="isMobile" align="center" justify="center" size="large">
                <n-flex align="center" size="small" vertical>
                    <n-qr-code
                        :icon-src="appConfig.self.avatar.src"
                        :size="appConfig.support.fallback_qrcode_size"
                        :value="appConfig.support.alipay.red_packet"
                        class="box-content"
                        icon-background-color="transparent"
                    />

                    <n-text>红包</n-text>
                </n-flex>

                <n-flex align="center" size="small" vertical>
                    <n-qr-code
                        :icon-src="appConfig.self.avatar.src"
                        :size="appConfig.support.fallback_qrcode_size"
                        :value="appConfig.support.alipay.pay"
                        class="box-content"
                        icon-background-color="transparent"
                    />

                    <n-text>支付</n-text>
                </n-flex>
            </n-flex>
        </n-card>
    </n-flex>
</template>