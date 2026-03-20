<script lang="ts" setup>
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import CustomNaivePosition from "@/components/custom/naive/position.vue";
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import { useZodRegistry } from "@/composables/database";
    import { NAlert, NElement, NText } from "naive-ui";
    import { isNonNullish } from "remeda";
    import { z } from "zod";

    defineOptions({
        name: "SectionsSupportAfdian",
    });

    const { 0: url } = useZodRegistry(
        z.object({
            "support.afdian.url:0": z.string(),
        }),
    );
</script>

<template>
    <template v-if="isNonNullish(url)">
        <custom-naive-vertical-stack>
            <n-alert title="不推荐" type="warning">
                <custom-naive-vertical-stack :size="0">
                    <n-text>需要登录账号</n-text>
                    <n-text type="success">推荐使用 支付宝</n-text>
                </custom-naive-vertical-stack>
            </n-alert>

            <n-element class="relative">
                <n-element
                    class="size-full absolute top-0 left-0 transition-([opacity_background] duration-500 ease-in-out) opacity-0 hover:(bg-([#000000] opacity-50) opacity-100)"
                >
                    <custom-naive-position class="h-full" placement="center">
                        <custom-redirect :href="url">
                            <custom-naive-button icon="i-ant-design:link-outlined" type="primary"
                                >访问</custom-naive-button
                            >
                        </custom-redirect>
                    </custom-naive-position>
                </n-element>

                <iframe :src="url" class="w-full h-240 border-none" />
            </n-element>
        </custom-naive-vertical-stack>
    </template>
</template>