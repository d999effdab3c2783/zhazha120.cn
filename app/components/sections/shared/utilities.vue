<script lang="ts" setup>
    import { useRegistryStore } from "~~/layers/providers.registry/stores/registry";

    const registryStore = useRegistryStore();
    const modal = useTemplateRef("modal");

    defineExpose({
        modal,
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

        <n-flex size="small">
            <template v-for="utility in registryStore.utilities">
                <NaiveModalWrapper :title="utility.name" preset="card" size="small">
                    <template #trigger="{ toggle }">
                        <n-button secondary size="small" @click="toggle">
                            <template #icon>
                                <n-icon :class="utility.icon" />
                            </template>

                            {{ utility.name }}
                        </n-button>
                    </template>

                    <Component :is="utility.render" />
                </NaiveModalWrapper>
            </template>
        </n-flex>
    </NaiveModalWrapper>
</template>