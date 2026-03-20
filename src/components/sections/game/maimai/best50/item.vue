<script lang="ts" setup>
    import CustomNaivePosition from "@/components/custom/naive/position.vue";
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import type { Chart } from "@/types/components/game/maimai/diving-fish-best50";
    import { NCard, NImage, NTag, NText } from "naive-ui";
    import { isEmptyish } from "remeda";
    import { computed } from "vue";

    defineOptions({
        name: "SectionsGameMaimaiBest50Item",
    });

    const props = defineProps<{
        readonly index: number;
        readonly item: Chart;
    }>();

    const cover = computed(() => {
        let offset = 0;

        if (props.item.song_id > 10000 && props.item.song_id <= 11000) {
            offset = -10000;
        }

        const realId = (props.item.song_id + offset).toString().padStart(5, "0");

        return `https://www.diving-fish.com/covers/${realId}.png`;
    });
</script>

<template>
    <n-card :title="`#${index + 1}`" class="h-full" size="small">
        <template #cover>
            <n-image :src="cover" class="w-full" />
        </template>

        <custom-naive-vertical-stack class="h-full">
            <custom-naive-vertical-stack :size="0">
                <n-text :depth="3">[{{ item.type }}] {{ item.song_id }}</n-text>
                <n-text class="fw-bold">{{ item.title }}</n-text>
                <n-text type="primary"
                    >{{ item.level_label }} {{ item.level }} ({{ item.ds }})</n-text
                >
                <n-text type="primary"
                    >{{ item.rate.replace("p", "+").toUpperCase() }} {{ item.achievements }} ->
                    {{ item.ra }}</n-text
                >
                <n-text :depth="3">DX Score: {{ item.dxScore }}</n-text>
            </custom-naive-vertical-stack>

            <custom-naive-position class="h-full" placement="bottom-right">
                <template v-if="!isEmptyish(item.fc)">
                    <n-tag size="small" type="success">{{ item.fc.toUpperCase() }}</n-tag>
                </template>

                <template v-if="!isEmptyish(item.fs)">
                    <n-tag size="small" type="info">{{ item.fs.toUpperCase() }}</n-tag>
                </template>
            </custom-naive-position>
        </custom-naive-vertical-stack>
    </n-card>
</template>