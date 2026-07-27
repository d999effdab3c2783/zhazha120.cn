<script lang="ts" setup>
    const container = useTemplateRef("container");

    defineExpose({
        container,
    });
</script>

<template>
    <NuxtLayout name="container">
        <n-element ref="container">
            <n-flex :size="120" align="center" vertical>
                <SectionsHome2Self />
                <SectionsHome2Dev />

                <n-divider dashed>
                    <n-element class="leading-tight">
                        <n-flex :size="0" align="center" vertical>
                            <n-h2 class="fw-extrabold !mb-0">福瑞</n-h2>
                            <n-text :depth="3">Furry</n-text>
                        </n-flex>
                    </n-element>
                </n-divider>

                <n-divider dashed>
                    <n-h2 class="fw-extrabold !mb-0">杂项</n-h2>
                </n-divider>
            </n-flex>
        </n-element>
    </NuxtLayout>
</template>