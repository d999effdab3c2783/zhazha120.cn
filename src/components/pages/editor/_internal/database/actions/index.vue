<script lang="ts" setup>
    import ExportAction from "@/components/pages/editor/_internal/database/actions/export.vue";
    import ImportAction from "@/components/pages/editor/_internal/database/actions/import.vue";
    import ResetAction from "@/components/pages/editor/_internal/database/actions/reset.vue";
    import SeedAction from "@/components/pages/editor/_internal/database/actions/seed.vue";
    import type { Dexie } from "dexie";
    import { NFlex } from "naive-ui";
    import { h } from "vue";

    const props = defineProps<{
        readonly database: Dexie;
    }>();

    const emits = defineEmits<{
        (event: "import", database: Dexie): void;
    }>();

    const seedAction = import.meta.env.DEV
        ? h(SeedAction, {
              database: props.database,
          })
        : null;

    const handleImport = async (database: Dexie) => {
        emits("import", database);
    };
</script>

<template>
    <n-flex align="center" size="small" vertical>
        <n-flex size="small">
            <import-action @import="handleImport" />
            <export-action :database="database" />
        </n-flex>

        <n-flex size="small">
            <component :is="seedAction" />
            <reset-action :database="database" />
        </n-flex>
    </n-flex>
</template>