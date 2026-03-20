<script lang="ts" setup>
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import LayoutsSubPage from "@/components/layouts/sub-page.vue";
    import SectionsToolsKeyAccuracyCalculatorAccuracyInput from "@/components/sections/tools/key-accuracy-calculator/accuracy-input.vue";
    import SectionsToolsKeyAccuracyCalculatorPresetEditor from "@/components/sections/tools/key-accuracy-calculator/preset-editor.vue";
    import SectionsToolsKeyAccuracyCalculatorPresetSelector from "@/components/sections/tools/key-accuracy-calculator/preset-selector.vue";
    import SectionsToolsKeyAccuracyCalculatorResult from "@/components/sections/tools/key-accuracy-calculator/result.vue";
    import SectionsToolsKeyAccuracyCalculatorTips from "@/components/sections/tools/key-accuracy-calculator/tips.vue";
    import { useToolsKeyAccuracyCalculatorStore } from "@/stores/tools";
    import { NCard, NDivider, NPopconfirm, NResult } from "naive-ui";
    import { ProCard as ProNCard } from "pro-naive-ui";
    import { isEmptyish, isNonNullish } from "remeda";

    const keyAccuracyCalculatorStore = useToolsKeyAccuracyCalculatorStore();
</script>

<template>
    <layouts-sub-page>
        <custom-naive-vertical-stack>
            <n-card size="small" title="预设">
                <sections-tools-key-accuracy-calculator-preset-selector />
            </n-card>

            <pro-n-card :show="false" size="small" title="编辑器">
                <sections-tools-key-accuracy-calculator-preset-editor />
            </pro-n-card>

            <n-divider />

            <n-card :title="keyAccuracyCalculatorStore.editPreset.name" class="flex-1" size="small">
                <template #header-extra>
                    <n-popconfirm @positive-click="keyAccuracyCalculatorStore.resetInputs()">
                        <template #trigger>
                            <custom-naive-button
                                icon="i-ant-design:delete-outlined"
                                secondary
                                size="small"
                                type="error"
                                >清空</custom-naive-button
                            >
                        </template>

                        确认清空吗
                    </n-popconfirm>
                </template>

                <template
                    v-if="
                        isNonNullish(keyAccuracyCalculatorStore.editPreset) &&
                        !isEmptyish(keyAccuracyCalculatorStore.editPreset.maps)
                    "
                >
                    <custom-naive-vertical-stack>
                        <sections-tools-key-accuracy-calculator-accuracy-input />
                        <sections-tools-key-accuracy-calculator-result />
                    </custom-naive-vertical-stack>
                </template>

                <template v-else>
                    <n-result status="error" title="无数据" />
                </template>
            </n-card>

            <n-divider />

            <n-card size="small" title="提示">
                <sections-tools-key-accuracy-calculator-tips />
            </n-card>
        </custom-naive-vertical-stack>
    </layouts-sub-page>
</template>