<script lang="ts" setup>
    import { isNonNullish, isNullish } from "remeda";

    defineOptions({
        inheritAttrs: false,
    });

    const props = defineProps<{
        readonly href: string;
    }>();

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
    <NaiveModalWrapper
        ref="modal"
        :title="$t('providers.components.naive-ui:redirector-wrapper:modal.title')"
        preset="card"
        size="small"
    >
        <template #trigger>
            <slot :href="href" :redirect="handle" />
        </template>

        <n-flex align="center" size="small" vertical>
            <n-text class="text-6 fw-bold" type="warning">
                {{ $t("providers.components.naive-ui:redirector-wrapper:warning") }}
            </n-text>

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

            <n-text>{{ $t("providers.components.naive-ui:redirector-wrapper:hint") }}</n-text>
        </n-flex>

        <template v-if="isNonNullish($slots.extra)">
            <n-divider />

            <slot name="extra" />
        </template>
    </NaiveModalWrapper>
</template>