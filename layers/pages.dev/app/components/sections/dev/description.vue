<template>
    <n-flex :size="0" vertical>
        <n-text>{{ $t("pages.dev:description:1") }}</n-text>
        <n-text class="text-(black opacity-0)">{{ $t("pages.dev:description:2") }}</n-text>
        <n-text :depth="3">{{ $t("pages.dev:description:3") }}</n-text>
        <n-text :depth="3">{{ $t("pages.dev:description:4") }}</n-text>
        <n-text :depth="3">{{ $t("pages.dev:description:5") }}</n-text>
    </n-flex>
</template>