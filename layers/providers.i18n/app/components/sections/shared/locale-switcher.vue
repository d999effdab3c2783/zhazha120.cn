<script lang="ts" setup>
    import type { Locale } from "#i18n";

    const i18n = useI18n();

    const options = computed(() =>
        i18n.locales.value.map(({ name, code }) => ({
            label: name,
            value: code,
        })),
    );

    const handleUpdateValue = async (newValue: Locale) => {
        await i18n.setLocale(newValue);
    };
</script>

<template>
    <n-select
        :options="options"
        :value="i18n.locale.value"
        class="w-60"
        @update:value="handleUpdateValue"
    />
</template>