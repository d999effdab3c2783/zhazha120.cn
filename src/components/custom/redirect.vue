<script lang="ts" setup>
    import CustomNaiveModalWrapper from "@/components/custom/naive/modal-wrapper.vue";
    import CustomNaiveVerticalStack from "@/components/custom/naive/vertical-stack.vue";
    import { NA, NDivider, NText } from "naive-ui";
    import { isNonNullish, isNullish } from "remeda";
    import { useTemplateRef } from "vue";
    import { useRouter } from "vue-router";

    defineOptions({
        name: "CustomRedirect",
    });

    const props = defineProps<{
        readonly href: string;
    }>();

    const router = useRouter();
    const triggerLinkRef = useTemplateRef("triggerLinkRef");

    const handleClick = async (event: MouseEvent, toggleExternalLinkWarningModal: () => void) => {
        if (
            isNonNullish(event.target) &&
            event.target instanceof Element &&
            [".n-image", ".n-a"].some((selector) => {
                const target = (event.target as Element).closest(selector);

                if (isNullish(target) || isNullish(triggerLinkRef.value)) {
                    return false;
                }

                if (target === triggerLinkRef.value.$el) {
                    return false;
                }

                return true;
            })
        ) {
            event.preventDefault();
            return;
        }

        if (props.href.startsWith("blob:")) {
            return;
        }

        event.preventDefault();

        if (props.href.startsWith("/")) {
            await router.push({
                path: props.href,
            });

            return;
        }

        toggleExternalLinkWarningModal();
    };
</script>

<template>
    <custom-naive-modal-wrapper preset="card" size="small">
        <template #trigger="{ toggle }">
            <n-a
                ref="triggerLinkRef"
                :href="href"
                class="contents"
                @click="handleClick($event, toggle)"
            >
                <slot />
            </n-a>
        </template>

        <custom-naive-vertical-stack align="center" class="text-center">
            <n-text class="text-6 fw-bold" type="warning">外部内容警告</n-text>
            <n-a :href="href" target="_blank">{{ href }}</n-a>
            <n-text>↑ 自行判断 如需继续请戳上面的连接 ↑</n-text>

            <template v-if="isNonNullish($slots.extra)">
                <n-divider />
            </template>

            <slot name="extra" />
        </custom-naive-vertical-stack>
    </custom-naive-modal-wrapper>
</template>