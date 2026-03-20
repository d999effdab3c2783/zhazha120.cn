<script lang="ts" setup>
    import CustomNaiveButton from "@/components/custom/naive/button.vue";
    import { NButtonGroup, NDynamicInput } from "naive-ui";

    defineProps<{
        readonly value: unknown[];
    }>();

    const emits = defineEmits<{
        (event: "update:value", value: unknown[]): void;
    }>();

    const handleUpdateValue = async (newValue: unknown[]) => {
        emits("update:value", newValue);
    };
</script>

<template>
    <n-dynamic-input :value="value" preset="input" @update:value="handleUpdateValue">
        <template #action="{ create, remove, index }">
            <n-button-group class="ml-2">
                <custom-naive-button
                    icon="i-ant-design:minus-outlined"
                    size="tiny"
                    @click="remove(index)"
                />
                <custom-naive-button
                    icon="i-ant-design:plus-outlined"
                    size="tiny"
                    @click="create(index)"
                />
            </n-button-group>
        </template>
    </n-dynamic-input>
</template>