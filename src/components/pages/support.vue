<script lang="ts" setup>
    import LayoutsSubPage from "@/components/layouts/sub-page.vue";
    import SectionsSupportAfdian from "@/components/sections/support/afdian.vue";
    import SectionsSupportAlipay from "@/components/sections/support/alipay.vue";
    import SectionsSupportQq from "@/components/sections/support/qq.vue";
    import SectionsSupportWechat from "@/components/sections/support/wechat.vue";
    import { useHasRegistry } from "@/composables/database";
    import { useRouteParams } from "@vueuse/router";
    import { NTabPane, NTabs } from "naive-ui";

    const method = useRouteParams("method", () => undefined);

    const showAfdian = useHasRegistry("support.afdian.*");
    const showQq = useHasRegistry("support.qq.*");
    const showWechat = useHasRegistry("support.wechat.*");
    const showAlipay = useHasRegistry("support.alipay.*");
</script>

<template>
    <layouts-sub-page>
        <template v-if="showAfdian || showQq || showWechat || showAlipay">
            <n-tabs v-model:value="method" default-value="alipay" type="segment">
                <template v-if="showAfdian">
                    <n-tab-pane name="afdian" tab="爱发电">
                        <sections-support-afdian />
                    </n-tab-pane>
                </template>

                <template v-if="showQq">
                    <n-tab-pane name="qq" tab="QQ">
                        <sections-support-qq />
                    </n-tab-pane>
                </template>

                <template v-if="showWechat">
                    <n-tab-pane name="wechat" tab="微信">
                        <sections-support-wechat />
                    </n-tab-pane>
                </template>

                <template v-if="showAlipay">
                    <n-tab-pane name="alipay" tab="支付宝">
                        <sections-support-alipay />
                    </n-tab-pane>
                </template>
            </n-tabs>
        </template>
    </layouts-sub-page>
</template>