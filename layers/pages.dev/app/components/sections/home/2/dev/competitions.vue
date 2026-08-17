<script setup lang="ts"></script>
<template>
    <n-flex :size="0" vertical>
        <n-divider>{{ $t("pages.dev:challenges") }}</n-divider>

        <n-card :title="$t('pages.dev:competition_history')" size="small">
            <SectionsDevCompetitions />
        </n-card>
    </n-flex>
</template>