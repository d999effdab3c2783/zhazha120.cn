<script lang="ts" setup>
    import { isNullish } from "remeda";

    defineOptions({
        inheritAttrs: false,
    });

    const props = defineProps<{
        readonly href: string;
    }>();

    const { isMobile } = useResponsive();
    const modal = useTemplateRef("modal");

    const handle = async () => {
        if (isNullish(modal.value)) {
            return;
        }

        if (props.href.startsWith("/")) {
            await navigateTo({
                path: props.href,
            });

            return;
        }

        const url = new URL(props.href);

        if (["http:", "https:"].includes(url.protocol) && url.host !== location.host) {
            modal.value.show();
            return;
        }

        open(props.href);
    };
</script>

<template>
    <NaiveModalWrapper ref="modal" preset="card" size="small" title="即将离开当前网站">
        <template #trigger>
            <slot :href="href" :redirect="handle" />
        </template>

        <n-flex align="center" size="small" vertical>
            <n-text class="text-6 fw-bold" type="warning">外部内容警告</n-text>

            <n-button
                :href="href"
                class="py-2 w-full text-wrap"
                tag="a"
                target="_blank"
                text
                type="primary"
            >
                {{ href }}
            </n-button>

            <n-text>↑ 自行判断 如需继续请戳上面的连接 ↑</n-text>
        </n-flex>
    </NaiveModalWrapper>
</template>