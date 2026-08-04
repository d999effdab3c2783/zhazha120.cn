<script lang="ts" setup>
    definePageMeta({
        layout: "subpage",
        title: "支持 & 赞助",
    });

    const appConfig = useAppConfig();

    const assets = [
        new URL("../assets/wechat.bin", import.meta.url).toString(),
        new URL("../assets/alipay/red_packet.bin", import.meta.url).toString(),
        new URL("../assets/alipay/pay.bin", import.meta.url).toString(),
    ];
</script>

<template>
    <n-tabs animated type="segment">
        <n-tab-pane name="爱发电"></n-tab-pane>

        <n-tab-pane name="QQ 支付">
            <SectionsSupportQq />
        </n-tab-pane>

        <n-tab-pane name="微信支付">
            <SectionsSupportWechat />
        </n-tab-pane>

        <n-tab-pane name="支付宝">
            <SectionsSupportAlipay />
        </n-tab-pane>
    </n-tabs>
</template>