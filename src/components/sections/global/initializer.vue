<script lang="ts" setup>
    import "dexie-export-import";
    import CustomNaiveModalWrapper from "@/components/custom/naive/modal-wrapper.vue";
    import CustomNaivePosition from "@/components/custom/naive/position.vue";
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import CustomTransitionsFade from "@/components/custom/transitions/fade.vue";
    import { useDatabaseUpdater } from "@/composables/database";
    import databaseConfig from "@/config/database";
    import Database from "@/database";
    import { isMobile } from "@/shared/responsive";
    import { until } from "@vueuse/core";
    import { NResult, NSpin, NText } from "naive-ui";
    import { isNonNullish } from "remeda";
    import { onMounted, ref, useTemplateRef } from "vue";

    const updateModalRef = useTemplateRef("updateModalRef");
    const databaseUpdater = useDatabaseUpdater();

    const loading = ref(true);
    const success = ref(false);

    onMounted(async () => {
        if (import.meta.env.DEV) {
            loading.value = false;
            success.value = true;
            Database.instance.ready.value = true;
            return;
        }

        await until(databaseUpdater.canSilentUpdate).toMatch(isNonNullish);

        try {
            if (databaseUpdater.canSilentUpdate.value) {
                loading.value = false;
                success.value = true;
                Database.instance.ready.value = true;
            }

            if (await databaseUpdater.check()) {
                if (databaseUpdater.canSilentUpdate.value) {
                    if (!databaseUpdater.canSkip.value) {
                        await databaseUpdater.forceUpdate();
                        return;
                    }

                    if (isNonNullish(updateModalRef.value)) {
                        updateModalRef.value.show();
                    }

                    return;
                }

                await databaseUpdater.update();
            }
        } finally {
            loading.value = false;
            success.value = true;
            Database.instance.ready.value = true;
        }
    });
</script>

<template>
    <custom-naive-modal-wrapper
        ref="updateModalRef"
        :class="{ '!w-full !max-w-full': isMobile }"
        :negative-text="databaseUpdater.canSkip ? '跳过' : undefined"
        positive-text="现在更新"
        preset="dialog"
        title="检测到更新"
        @positive-click="databaseUpdater.forceUpdate()"
        @negative-click="databaseUpdater.skip()"
    >
        <n-text
            >剩余
            {{ databaseConfig.max_updater_skip_count - databaseUpdater.skipUpdaterCounter.value }}
            次跳过更新
        </n-text>
    </custom-naive-modal-wrapper>

    <custom-transitions-fade appear mode="out-in">
        <template v-if="loading">
            <custom-naive-position class="h-screen" placement="center">
                <custom-naive-vertical-stack :size="12">
                    <n-spin size="large" />
                    <n-text class="text-8">加载中</n-text>
                </custom-naive-vertical-stack>
            </custom-naive-position>
        </template>

        <template v-else>
            <template v-if="success">
                <slot />
            </template>

            <template v-else>
                <custom-naive-position class="h-screen" placement="center">
                    <n-result status="error" title="初始化异常 请联系渣渣" />
                </custom-naive-position>
            </template>
        </template>
    </custom-transitions-fade>
</template>