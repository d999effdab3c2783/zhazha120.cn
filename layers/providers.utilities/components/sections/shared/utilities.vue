<script lang="ts" setup>
    const utilitiesStore = useUtilitiesStore();
</script>

<template>
    <n-flex size="small">
        <template v-for="utility in utilitiesStore.registry">
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
</template>