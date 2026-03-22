<script lang="ts" setup>
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import { convertBlobToFile, generateBlobURL } from "@/utils/blob";
    import { NIcon, NText, NUpload, NUploadDragger, type UploadFileInfo } from "naive-ui";
    import { isNullish } from "remeda";
    import { computed } from "vue";

    defineOptions({
        name: "CustomNaiveUploader",
        inheritAttrs: false,
    });

    const file = defineModel<Blob | File>("file");

    const fileList = computed<UploadFileInfo[]>(() => {
        if (isNullish(file.value)) {
            return [];
        }

        if (file.value instanceof File) {
            return [
                {
                    id: "stored",
                    status: "finished",
                    type: file.value.type,
                    name: file.value.name,
                    file: file.value,
                    url: generateBlobURL(file.value),
                },
            ];
        }

        return [
            {
                id: "stored",
                status: "finished",
                type: file.value.type,
                name: "blob",
                file: convertBlobToFile(file.value, "-"),
                url: generateBlobURL(file.value),
            },
        ];
    });

    const handleUpload = async (newFileList: UploadFileInfo[]) => {
        if (
            isNullish(newFileList) ||
            newFileList.length !== 1 ||
            isNullish(newFileList[0]) ||
            isNullish(newFileList[0].file)
        ) {
            return;
        }

        file.value = newFileList[0].file;
    };
</script>

<template>
    <n-upload
        :file-list="fileList"
        :max="1"
        directory-dnd
        v-bind="$attrs"
        @update:file-list="handleUpload"
    >
        <n-upload-dragger>
            <custom-naive-vertical-stack align="center">
                <n-icon class="size-12 i-ant-design:upload-outlined" />
                <n-text>点击或者拖动文件到该区域来上传</n-text>
            </custom-naive-vertical-stack>
        </n-upload-dragger>
    </n-upload>
</template>