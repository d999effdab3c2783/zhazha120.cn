<script lang="ts" setup>
    import CustomNaiveHorizontalStack from "@/components/custom/naive/horizontal-stack.vue";
    import CustomNaivePosition from "@/components/custom/naive/position.vue";
    import { useZodRegistry } from "@/composables/database";
    import { isMobile } from "@/shared/responsive";
    import { useNow } from "@vueuse/core";
    import { differenceInMilliseconds } from "date-fns";
    import { NCard, NText } from "naive-ui";
    import { isNonNullish, isNullish } from "remeda";
    import { computed } from "vue";
    import { z } from "zod";

    defineOptions({
        name: "SectionsBirthdayCurrent",
    });

    const {
        0: name,
        1: short_name,
        2: birthday,
    } = useZodRegistry(
        z.object({
            "intro.name:0": z.string(),
            "self.short_name:1": z.string(),
            "self.birthday:2": z.string(),
        }),
    );

    const now = useNow();

    const diff = computed(() => {
        if (isNullish(birthday.value)) {
            return;
        }

        return (
            differenceInMilliseconds(now.value, new Date(birthday.value)) /
            1000 /
            60 /
            60 /
            24 /
            365
        ).toFixed(12);
    });
</script>

<template>
    <template v-if="isNonNullish(birthday) && isNonNullish(diff)">
        <n-card size="small">
            <custom-naive-position
                :placement="isMobile ? 'center' : 'center-left'"
                class="leading-none"
            >
                <n-text class="text-8">{{ short_name ?? name }} 现在</n-text>

                <custom-naive-horizontal-stack
                    :size="0"
                    :wrap="false"
                    align="baseline"
                    class="font-mono"
                >
                    <n-text class="text-12" type="success">{{ diff.split(".")[0] }}</n-text>
                    <n-text :depth="3" class="text-6">.</n-text>
                    <n-text class="text-6" type="info">{{ diff.split(".")[1] }}</n-text>
                </custom-naive-horizontal-stack>

                <n-text class="text-8"> 岁了</n-text>
            </custom-naive-position>
        </n-card>
    </template>
</template>