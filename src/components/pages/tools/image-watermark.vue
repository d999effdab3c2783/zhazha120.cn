<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import CustomNaivePosition from "@/components/custom/naive/position.vue";
    import CustomNaiveUploader from "@/components/custom/naive/uploader.vue";
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import LayoutsSubPage from "@/components/layouts/sub-page.vue";
    import SectionsToolsImageWatermarkClipboardImporter from "@/components/sections/tools/image-watermark/clipboard-importer.vue";
    import { useToolsImageWatermarkStore } from "@/stores/tools";
    import { generateBlobURL } from "@/utils/blob";
    import { XNSelect, XNSelectOption } from "@skit/x.naive-ui";
    import {
        NCard,
        NColorPicker,
        NDivider,
        NFormItem,
        NImage,
        NInput,
        NInputNumber,
        NSwitch,
        NWatermark,
    } from "naive-ui";
    import { isNonNullish } from "remeda";
    import { ref } from "vue";

    const file = ref<Blob>();

    const toolsImageWatermarkStore = useToolsImageWatermarkStore();
</script>

<template>
    <layouts-sub-page>
        <n-card size="small">
            <custom-naive-vertical-stack align="center">
                <template v-if="isNonNullish(file)">
                    <n-image :src="generateBlobURL(file)" class="size-40" />
                    <custom-naive-button
                        icon="i-ant-design:delete-outlined"
                        secondary
                        type="error"
                        @click="file = undefined"
                        >重新选择</custom-naive-button
                    >
                </template>

                <template v-else>
                    <custom-naive-uploader v-model:file="file" accept="image/*" />
                    <sections-tools-image-watermark-clipboard-importer v-model:file="file" />
                </template>
            </custom-naive-vertical-stack>
        </n-card>

        <template v-if="isNonNullish(file)">
            <n-card size="small">
                <custom-naive-position placement="center">
                    <n-watermark v-bind="toolsImageWatermarkStore.config">
                        <n-image :src="generateBlobURL(file)" />
                    </n-watermark>
                </custom-naive-position>

                <n-divider />

                <custom-naive-auto-stack justify="space-evenly">
                    <n-form-item label="内容">
                        <n-input v-model:value="toolsImageWatermarkStore.config.content" />
                    </n-form-item>

                    <n-form-item label="跨越边界显示">
                        <custom-naive-position class="w-full" placement="center">
                            <n-switch v-model:value="toolsImageWatermarkStore.config.cross" />
                        </custom-naive-position>
                    </n-form-item>

                    <n-form-item label="调试">
                        <custom-naive-position class="w-full" placement="center">
                            <n-switch v-model:value="toolsImageWatermarkStore.config.debug" />
                        </custom-naive-position>
                    </n-form-item>

                    <n-form-item label="字体大小">
                        <n-input-number v-model:value="toolsImageWatermarkStore.config.fontSize" />
                    </n-form-item>

                    <n-form-item label="字体">
                        <n-input v-model:value="toolsImageWatermarkStore.config.fontFamily" />
                    </n-form-item>

                    <n-form-item class="min-w-60" label="字体风格">
                        <x-n-select v-model:value="toolsImageWatermarkStore.config.fontStyle">
                            <x-n-select-option value="normal">正常</x-n-select-option>
                            <x-n-select-option value="italic">斜体</x-n-select-option>
                        </x-n-select>
                    </n-form-item>

                    <n-form-item label="字型">
                        <n-input v-model:value="toolsImageWatermarkStore.config.fontVariant" />
                    </n-form-item>

                    <n-form-item label="字重">
                        <n-input-number
                            v-model:value="toolsImageWatermarkStore.config.fontWeight"
                        />
                    </n-form-item>

                    <n-form-item class="min-w-60" label="字体颜色">
                        <n-color-picker v-model:value="toolsImageWatermarkStore.config.fontColor" />
                    </n-form-item>

                    <n-form-item label="全屏">
                        <custom-naive-position class="w-full" placement="center">
                            <n-switch v-model:value="toolsImageWatermarkStore.config.fullscreen" />
                        </custom-naive-position>
                    </n-form-item>

                    <n-form-item label="全局旋转">
                        <n-input-number
                            v-model:value="toolsImageWatermarkStore.config.globalRotate"
                        />
                    </n-form-item>

                    <n-form-item label="行高">
                        <n-input-number
                            v-model:value="toolsImageWatermarkStore.config.lineHeight"
                        />
                    </n-form-item>

                    <n-form-item label="高度">
                        <n-input-number v-model:value="toolsImageWatermarkStore.config.height" />
                    </n-form-item>

                    <n-form-item label="图片">
                        <n-input v-model:value="toolsImageWatermarkStore.config.image" />
                    </n-form-item>

                    <n-form-item label="图片高度">
                        <n-input-number
                            v-model:value="toolsImageWatermarkStore.config.imageHeight"
                        />
                    </n-form-item>

                    <n-form-item label="图片透明度">
                        <n-input-number
                            v-model:value="toolsImageWatermarkStore.config.imageOpacity"
                        />
                    </n-form-item>

                    <n-form-item label="图片宽度">
                        <n-input-number
                            v-model:value="toolsImageWatermarkStore.config.imageWidth"
                        />
                    </n-form-item>

                    <n-form-item label="旋转角度">
                        <n-input-number v-model:value="toolsImageWatermarkStore.config.rotate" />
                    </n-form-item>

                    <n-form-item label="被水印覆盖的内容是否可选中">
                        <custom-naive-position class="w-full" placement="center">
                            <n-switch v-model:value="toolsImageWatermarkStore.config.selectable" />
                        </custom-naive-position>
                    </n-form-item>

                    <n-form-item class="min-w-60" label="文本对齐方式">
                        <x-n-select v-model:value="toolsImageWatermarkStore.config.textAlign">
                            <x-n-select-option value="left">左对齐</x-n-select-option>
                            <x-n-select-option value="center">居中</x-n-select-option>
                            <x-n-select-option value="right">右对齐</x-n-select-option>
                        </x-n-select>
                    </n-form-item>

                    <n-form-item label="宽度">
                        <n-input-number v-model:value="toolsImageWatermarkStore.config.width" />
                    </n-form-item>

                    <n-form-item label="X 轴间隔">
                        <n-input-number v-model:value="toolsImageWatermarkStore.config.xGap" />
                    </n-form-item>

                    <n-form-item label="X 轴偏移">
                        <n-input-number v-model:value="toolsImageWatermarkStore.config.xOffset" />
                    </n-form-item>

                    <n-form-item label="Y 轴间隔">
                        <n-input-number v-model:value="toolsImageWatermarkStore.config.yGap" />
                    </n-form-item>

                    <n-form-item label="Y 轴偏移">
                        <n-input-number v-model:value="toolsImageWatermarkStore.config.yOffset" />
                    </n-form-item>

                    <n-form-item label="Z 轴高度">
                        <n-input-number v-model:value="toolsImageWatermarkStore.config.zIndex" />
                    </n-form-item>
                </custom-naive-auto-stack>
            </n-card>
        </template>
    </layouts-sub-page>
</template>