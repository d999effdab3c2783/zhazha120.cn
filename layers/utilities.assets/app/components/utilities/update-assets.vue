<script lang="ts" setup>
    import type { Asset } from "#layers/providers.assets/app/types/assets";

    const assetsStore = useAssetsStore();
    const message = useMessage();
    const i18n = useI18n();

    const key = shallowRef(0);

    const selectedAssets = new Set<Asset>();

    const handleUpdateChecked = (checked: boolean, asset: Asset): void => {
        selectedAssets.delete(asset);

        if (checked) {
            selectedAssets.add(asset);
        }
    };

    const updater = useAsyncData(
        async () => {
            const response = await $fetch<number>("/api/update-assets", {
                method: "POST",
                body: JSON.stringify(
                    Array.from(selectedAssets).map((asset) => ({
                        ...asset,
                        path: assetsStore.convertPath(asset.href),
                    })),
                ),
            });

            if (response === 1) {
                message.success(i18n.t("utilities.assets:success"));
                key.value++;
                return;
            }

            message.error(
                i18n.t("utilities.assets:failed", {
                    response,
                }),
            );
        },
        {
            immediate: false,
        },
    );

    const handleUpdate = async () => {
        await updater.execute();
    };
</script>

<template>
    <n-flex size="small" vertical>
        <n-scrollbar class="max-h-120">
            <n-list bordered clickable hoverable>
                <template v-for="item in assetsStore.registry">
                    <n-list-item>
                        <n-flex align="center" size="small">
                            <n-checkbox
                                @update:checked="(checked) => handleUpdateChecked(checked, item)"
                            />

                            <n-image :key="key" :src="item.href" class="size-10" />

                            <n-flex :size="0" vertical>
                                <n-text>{{ item.src }}</n-text>
                                <n-text :depth="3">{{ assetsStore.convertPath(item.href) }}</n-text>
                            </n-flex>
                        </n-flex>
                    </n-list-item>
                </template>
            </n-list>
        </n-scrollbar>

        <n-button
            :disabled="updater.pending.value"
            :loading="updater.pending.value"
            block
            type="primary"
            @click="handleUpdate"
        >
            {{ $t("utilities.assets:submit") }}
        </n-button>
    </n-flex>
</template>