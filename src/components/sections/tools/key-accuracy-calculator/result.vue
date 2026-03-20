<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import CustomNaiveModalWrapper from "@/components/custom/naive/modal-wrapper.vue";
    import CustomNaivePosition from "@/components/custom/naive/position.vue";
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import CustomTransitionsFade from "@/components/custom/transitions/fade.vue";
    import { isDesktop } from "@/shared/responsive";
    import { useToolsKeyAccuracyCalculatorStore } from "@/stores/tools";
    import { copy } from "@/utils/clipboard";
    import { NAlert, NCard, NDivider, NElement, NTag, NText } from "naive-ui";
    import { isNonNullish, isNullish } from "remeda";
    import { computed } from "vue";

    defineOptions({
        name: "SectionsToolsKeyAccuracyCalculatorResult",
    });

    const keyAccuracyCalculatorStore = useToolsKeyAccuracyCalculatorStore();

    const filled = computed(() => {
        if (
            isNullish(keyAccuracyCalculatorStore.filteredInputs) ||
            isNullish(keyAccuracyCalculatorStore.filteredMaps)
        ) {
            return;
        }

        return (
            keyAccuracyCalculatorStore.filteredInputs.length > 0 &&
            keyAccuracyCalculatorStore.filteredInputs.length ===
                keyAccuracyCalculatorStore.filteredMaps.length
        );
    });

    const passed = computed(() => {
        if (
            isNullish(keyAccuracyCalculatorStore.filteredInputs) ||
            isNullish(keyAccuracyCalculatorStore.result)
        ) {
            return;
        }

        return (
            filled.value &&
            keyAccuracyCalculatorStore.inputs.at(-1)! >=
                keyAccuracyCalculatorStore.editPreset.require_accuracy
        );
    });

    const shareLines = computed(() => {
        if (isNullish(keyAccuracyCalculatorStore.result)) {
            return;
        }

        return [
            [
                `${keyAccuracyCalculatorStore.editPreset.name}`,
                keyAccuracyCalculatorStore.result
                    .map((value) => {
                        return value.toFixed(2);
                    })
                    .join(" - "),
            ].join("\n"),
            [
                `${keyAccuracyCalculatorStore.editPreset.name}`,
                keyAccuracyCalculatorStore.result
                    .map((value, index) => {
                        const fixedValue = value.toFixed(2);

                        if (isNonNullish(keyAccuracyCalculatorStore.editPreset.maps[index])) {
                            return `${keyAccuracyCalculatorStore.formatMapName(keyAccuracyCalculatorStore.editPreset.maps[index])}: ${fixedValue}`;
                        }

                        return fixedValue;
                    })
                    .join("\n"),
            ].join("\n"),
            [
                `${keyAccuracyCalculatorStore.editPreset.name}`,
                keyAccuracyCalculatorStore.result
                    .map((value, index) => {
                        const fixedValue = value.toFixed(2);

                        return `第 ${index + 1} 首的准度是: ${fixedValue}`;
                    })
                    .join("\n"),
            ].join("\n"),
        ];
    });
</script>

<template>
    <custom-transitions-fade appear mode="out-in">
        <template
            v-if="
                isNonNullish(keyAccuracyCalculatorStore.filteredInputs) &&
                keyAccuracyCalculatorStore.filteredInputs.length > 0 &&
                isNonNullish(keyAccuracyCalculatorStore.result)
            "
        >
            <custom-naive-vertical-stack :size="0">
                <n-divider>结果</n-divider>

                <n-alert :show-icon="false" :type="passed ? 'success' : 'error'">
                    <custom-naive-position placement="center">
                        <custom-naive-vertical-stack align="center">
                            <template v-if="filled && passed">
                                <n-element class="py-5 animate-spin hover:animate-duration-1">
                                    <n-text class="text-12">过了</n-text>
                                </n-element>
                            </template>

                            <custom-naive-auto-stack align="center">
                                <template
                                    v-for="(item, index) in keyAccuracyCalculatorStore.result"
                                >
                                    <n-tag
                                        :type="
                                            item >=
                                            keyAccuracyCalculatorStore.editPreset.require_accuracy
                                                ? 'success'
                                                : 'error'
                                        "
                                        >{{ item.toFixed(2) }}</n-tag
                                    >

                                    <template
                                        v-if="
                                            isDesktop &&
                                            index !== keyAccuracyCalculatorStore.result.length - 1
                                        "
                                    >
                                        <n-text :depth="3">-</n-text>
                                    </template>
                                </template>
                            </custom-naive-auto-stack>

                            <template v-if="filled && !passed">
                                <n-text :depth="3"
                                    >好可惜 就差
                                    {{
                                        (
                                            keyAccuracyCalculatorStore.editPreset.require_accuracy -
                                            keyAccuracyCalculatorStore.inputs.at(-1)!
                                        ).toFixed(2)
                                    }}</n-text
                                >
                            </template>

                            <template v-if="filled && isNonNullish(shareLines)">
                                <custom-naive-modal-wrapper preset="card" size="small" title="分享">
                                    <template #trigger="{ toggle }">
                                        <custom-naive-button
                                            class="mt-4"
                                            icon="i-tabler:share"
                                            @click="toggle"
                                            >告诉别人</custom-naive-button
                                        >
                                    </template>

                                    <custom-naive-vertical-stack>
                                        <template v-for="item in shareLines">
                                            <n-card embedded size="small">
                                                <n-text class="whitespace-pre-line">{{
                                                    item
                                                }}</n-text>

                                                <template #action>
                                                    <custom-naive-auto-stack>
                                                        <custom-naive-button
                                                            icon="i-ant-design:copy-outlined"
                                                            @click="copy(item)"
                                                            >复制</custom-naive-button
                                                        >
                                                        <custom-naive-button
                                                            icon="i-ant-design:copy-outlined"
                                                            @click="
                                                                copy(
                                                                    item
                                                                        .split('\n')
                                                                        .slice(1)
                                                                        .join('\n'),
                                                                )
                                                            "
                                                            >复制 (无标题)</custom-naive-button
                                                        >
                                                    </custom-naive-auto-stack>
                                                </template>
                                            </n-card>
                                        </template>
                                    </custom-naive-vertical-stack>
                                </custom-naive-modal-wrapper>
                            </template>
                        </custom-naive-vertical-stack>
                    </custom-naive-position>
                </n-alert>
            </custom-naive-vertical-stack>
        </template>
    </custom-transitions-fade>
</template>