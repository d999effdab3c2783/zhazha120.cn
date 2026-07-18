<script lang="ts" setup>
    const container = useTemplateRef("container");

    defineExpose({
        container,
    });
</script>

<template>
    <NuxtLayout name="container">
        <n-element ref="container">
            <n-flex :size="0" align="center" vertical>
                <n-divider>本体</n-divider>

                <n-flex size="small" vertical>
                    <SectionsHome2SelfDescription />
                    <SectionsHome2SelfContacts />
                    <SectionsHome2SelfDiscover />
                </n-flex>

                <n-divider>开发</n-divider>

                <n-divider>福瑞</n-divider>

                <n-divider>杂项</n-divider>
            </n-flex>
        </n-element>
    </NuxtLayout>
</template>