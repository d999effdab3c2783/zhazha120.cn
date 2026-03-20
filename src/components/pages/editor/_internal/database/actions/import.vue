<script lang="ts" setup>
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import CustomNaiveModalWrapper from "@/components/custom/naive/modal-wrapper.vue";
    import SharedUploadDraggerContent from "@/components/shared/upload-dragger-content.vue";
    import config from "@/config/database";
    import { decompressBlob } from "@/utils/blob";
    import type { Dexie } from "dexie";
    import { importDB } from "dexie-export-import";
    import { NUpload, NUploadDragger, type UploadFileInfo, useLoadingBar } from "naive-ui";
    import { isNullish } from "remeda";
    import { useTemplateRef } from "vue";

    const emits = defineEmits<{
        (event: "import", value: Dexie): void;
    }>();

    const modalRef = useTemplateRef("modalRef");
    const loadingBar = useLoadingBar();

    const handleUpload = async (newFileList: UploadFileInfo[]) => {
        if (
            isNullish(newFileList) ||
            newFileList.length !== 1 ||
            isNullish(newFileList[0]) ||
            isNullish(newFileList[0].file)
        ) {
            return;
        }

        const processed = await decompressBlob(newFileList[0].file, config.compression_format);

        loadingBar.start();

        const database = await importDB(processed, {
            progressCallback: (progress) => {
                if (progress.done) {
                    loadingBar.finish();
                }

                return true;
            },
        });

        emits("import", database);

        if (isNullish(modalRef.value)) {
            return;
        }

        modalRef.value.hide();
    };
</script>

<template>
    <custom-naive-modal-wrapper ref="modalRef" preset="card" size="small" title="导入数据库">
        <template #trigger="{ toggle }">
            <custom-naive-button icon="i-ant-design:import-outlined" secondary @click="toggle"
                >导入</custom-naive-button
            >
        </template>

        <n-upload :max="1" :show-file-list="false" directory-dnd @update:file-list="handleUpload">
            <n-upload-dragger>
                <shared-upload-dragger-content />
            </n-upload-dragger>
        </n-upload>
    </custom-naive-modal-wrapper>
</template>