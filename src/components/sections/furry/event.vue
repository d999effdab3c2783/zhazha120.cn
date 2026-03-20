<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import CustomNaivePosition from "@/components/custom/naive/position.vue";
    import CustomRedirect from "@/components/custom/redirect.vue";
    import { useDatabaseFile, useDatabaseValue } from "@/composables/database";
    import type FurryEvent from "@/database/tables/furry_event";
    import { isDesktop, isMobile } from "@/shared/responsive";
    import { formatDate } from "@/utils/date";
    import { NCard, NDivider, NH4, NImage, NText } from "naive-ui";
    import { isEmptyish, isNonNullish } from "remeda";
    import { computed } from "vue";

    defineOptions({
        name: "SectionsFurryEvent",
    });

    const props = defineProps<{
        readonly item: FurryEvent;
    }>();

    const cover = computed(() => {
        return useDatabaseFile(useDatabaseValue(props.item, "cover"));
    });
</script>

<template>
    <n-card size="small">
        <template v-if="isNonNullish(cover)" #cover>
            <n-image :class="{ 'w-full': isDesktop }" :src="cover" />
        </template>

        <custom-naive-position
            :class="{ 'text-center': isMobile }"
            :placement="isMobile ? 'center' : 'top-left'"
        >
            <custom-naive-auto-stack :size="0" align="center">
                <n-text class="text-6">{{ item.name }}</n-text>

                <template v-if="isDesktop">
                    <n-divider vertical />
                </template>

                <n-text class="text-5" type="primary"
                    >{{ formatDate(item.start_date) }} ~ {{ formatDate(item.end_date) }}</n-text
                >
            </custom-naive-auto-stack>

            <template v-if="!isEmptyish(item.description)">
                <n-h4 prefix="bar">{{ item.description }}</n-h4>
            </template>
        </custom-naive-position>

        <template v-if="!isEmptyish(item.href)" #action>
            <custom-naive-auto-stack>
                <custom-redirect :href="item.href">
                    <custom-naive-button icon="i-ant-design:link-outlined"
                        >详情</custom-naive-button
                    >
                </custom-redirect>
            </custom-naive-auto-stack>
        </template>
    </n-card>
</template>