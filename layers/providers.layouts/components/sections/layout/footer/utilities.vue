<script lang="ts" setup>
    import { isNonNullish, isNullish } from "remeda";

    const modal = useTemplateRef("modal");
    const appConfig = useAppConfig();
    const magicKeys = useMagicKeys();

    onMounted(() => {
        if (!isNonNullish(appConfig.layout.footer.utilities.hotkey)) {
            return;
        }

        const magicKey = magicKeys[appConfig.layout.footer.utilities.hotkey];

        if (isNullish(magicKey)) {
            return;
        }

        watch(magicKey, () => {
            if (isNullish(modal.value)) {
                return;
            }

            modal.value.show();
        });
    });
</script>

<template>
    <NaiveModalWrapper ref="modal" preset="card" size="small" title="功能">
        <template #trigger="{ toggle }">
            <n-button secondary size="small" @click="toggle">
                <template #icon>
                    <n-icon class="i-ant-design:appstore-outlined" />
                </template>

                小工具
            </n-button>
        </template>

        <SectionsSharedUtilities />
    </NaiveModalWrapper>
</template>