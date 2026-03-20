<script lang="ts" setup>
    import CustomNaiveAutoStack from "@/components/custom/naive/auto-stack.vue";
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import CustomModalWrapper from "@/components/custom/naive/modal-wrapper.vue";
    import SectionsUtilsQrcode from "@/components/sections/utils/qrcode.vue";
    import { isDesktop, isMobile } from "@/shared/responsive";
    import { useMagicKeys } from "@vueuse/core";
    import { isNonNullish } from "remeda";
    import { useTemplateRef, watch } from "vue";

    defineOptions({
        name: "SectionsUtils",
    });

    const modalRef = useTemplateRef("modalRef");
    const magicKeys = useMagicKeys();

    watch(magicKeys.F8, (newState) => {
        if (isNonNullish(modalRef.value) && newState) {
            modalRef.value.toggle();
        }
    });
</script>

<template>
    <custom-modal-wrapper ref="modalRef" preset="card" size="small" title="功能">
        <template #trigger="{ toggle }">
            <custom-naive-button
                :text="isDesktop"
                icon="i-ant-design:appstore-outlined"
                size="small"
                @click="toggle"
            >
                <template v-if="isMobile">功能</template>
            </custom-naive-button>
        </template>

        <custom-naive-auto-stack>
            <sections-utils-qrcode />
        </custom-naive-auto-stack>
    </custom-modal-wrapper>
</template>