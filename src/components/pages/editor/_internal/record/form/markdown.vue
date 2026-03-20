<script lang="ts" setup>
    import CustomMarkdown from "@/components/custom/markdown/index.vue";
    import TextControl from "@/components/pages/editor/_internal/record/form/text.vue";
    import { NCard, NFlex } from "naive-ui";

    defineProps<{
        readonly value: string;
    }>();

    const emits = defineEmits<{
        (event: "update:value", value: string): void;
    }>();

    const handleUpdateValue = async (newValue: string) => {
        emits("update:value", newValue);
    };
</script>

<template>
    <n-flex size="small" vertical>
        <text-control :value="value" @update:value="handleUpdateValue" />

        <n-card size="small">
            <custom-markdown :raw="value" />
        </n-card>
    </n-flex>
</template>