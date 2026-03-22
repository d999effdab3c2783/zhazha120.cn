<script lang="ts" setup>
    import { NModal } from "naive-ui";
    import { ref } from "vue";
    import { container } from "@/shared/website";

    defineOptions({
        name: "CustomNaiveModalWrapper",
    });

    const show = ref(false);

    const handleHide = async () => {
        show.value = false;
    };

    const handleShow = async () => {
        show.value = true;
    };

    const handleToggle = async () => {
        show.value = !show.value;
    };

    defineExpose({
        state: show,
        hide: handleHide,
        show: handleShow,
        toggle: handleToggle,
    });
</script>

<template>
    <n-modal v-model:show="show" :to="container" class="zhazha120__modal" v-bind="$attrs">
        <slot />
    </n-modal>

    <slot
        :hide="handleHide"
        :show="handleShow"
        :state="show"
        :toggle="handleToggle"
        name="trigger"
    />
</template>

<style lang="scss">
    @use "@/styles/zhazha120";
</style>