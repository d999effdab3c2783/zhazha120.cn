<script lang="ts" setup>
    import CustomNaivePosition from "@/components/custom/naive/position.vue";
    import { useZodRegistry } from "@/composables/database";
    import { NImage } from "naive-ui";
    import { isNonNullish } from "remeda";
    import { z } from "zod";

    defineOptions({
        name: "SectionsSupportQq",
    });

    const { 0: qrcode } = useZodRegistry(
        z.object({
            "support.qq.qrcode:0": z.string().describe("file"),
        }),
    );
</script>

<template>
    <custom-naive-position placement="center">
        <template v-if="isNonNullish(qrcode)">
            <n-image :src="qrcode" class="w-120" />
        </template>
    </custom-naive-position>
</template>