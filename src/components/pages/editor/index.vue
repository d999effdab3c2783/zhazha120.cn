<script lang="ts" setup>
    import Renderer from "@/components/pages/editor/_internal/database/index.vue";
    import Database from "@/database";
    import { useMagicKeys } from "@vueuse/core";
    import type { Dexie } from "dexie";
    import { NElement, NResult } from "naive-ui";
    import { isNonNullish } from "remeda";
    import { ref, shallowRef, watch } from "vue";

    const magicKeys = useMagicKeys();

    const show = ref(import.meta.env.DEV);

    const database = shallowRef<Dexie>(Database.instance);

    if (import.meta.env.PROD) {
        const watcher = watch(magicKeys.current, async (newKeys) => {
            if (newKeys.has("e") && newKeys.has("d") && newKeys.has("i") && newKeys.has("t")) {
                show.value = true;
                watcher.stop();
            }
        });
    }

    const handleDatabaseImport = async <T extends Dexie>(newDatabase: T) => {
        database.value = newDatabase;
    };
</script>

<template>
    <n-element>
        <template v-if="show">
            <template v-if="isNonNullish(database)">
                <renderer :database="database" @import="handleDatabaseImport" />
            </template>
        </template>

        <template v-else>
            <n-element class="relative h-screen">
                <n-element class="absolute top-1/2 left-1/2 -translate-1/2">
                    <n-result
                        description="使用编辑器可能会导致意外行为"
                        status="warning"
                        title="您已被警告"
                    />
                </n-element>
            </n-element>
        </template>
    </n-element>
</template>