<script lang="ts" setup>
    import type { FilterError } from "@/database/filter";
    import { NAlert, NFlex, NInput, NText } from "naive-ui";
    import { isNonNullish } from "remeda";
    import { ref, watch } from "vue";

    const props = defineProps<{
        readonly value: string;
        readonly error: FilterError | null;
    }>();

    const emits = defineEmits<{
        (event: "update:value", value: string): void;
    }>();

    const temp = ref<string>();

    watch(
        () => props.value,
        (newUrl) => {
            temp.value = newUrl;
        },
        {
            immediate: true,
        },
    );

    const handleInputBlur = async () => {
        if (isNonNullish(temp.value)) {
            emits("update:value", temp.value);
        }
    };
</script>

<template>
    <n-flex size="small" vertical>
        <n-input v-model:value="temp" type="textarea" @blur="handleInputBlur" />

        <template v-if="isNonNullish(error)">
            <n-alert title="解析异常" type="error">
                <n-flex :size="0" vertical>
                    <template v-for="item in error.errors">
                        <n-text>{{ item.message }}</n-text>
                    </template>
                </n-flex>
            </n-alert>
        </template>
    </n-flex>
</template>