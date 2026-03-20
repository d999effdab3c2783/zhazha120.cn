<script lang="ts" setup>
    import config from "@/config/database";
    import { NSelect, type SelectOption } from "naive-ui";
    import { computed } from "vue";

    const props = defineProps<{
        readonly value: string;
        readonly keys: string[];
    }>();

    const emits = defineEmits<{
        (event: "update:value", value: string): void;
    }>();

    const options = computed<SelectOption[]>(() => {
        return props.keys.map((key) => {
            return {
                label: key,
                value: key,
            } satisfies SelectOption;
        });
    });

    const value = computed(() => {
        if (props.value.startsWith(config.reference_prefix)) {
            return props.value.split(config.reference_prefix, 2)[1];
        }

        return props.value;
    });

    const handleUpdateValue = async (newValue: string) => {
        emits("update:value", `${config.reference_prefix}${newValue}`);
    };
</script>

<template>
    <n-select :options="options" :value="value" @update:value="handleUpdateValue" />
</template>