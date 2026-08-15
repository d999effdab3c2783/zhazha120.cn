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
                <SectionsHome2Furry />
                <SectionsHome2Misc />
            </n-flex>
        </n-element>
    </NuxtLayout>
</template>