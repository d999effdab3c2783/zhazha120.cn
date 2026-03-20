<script lang="ts" setup>
    import type { Tokens } from "marked";
    import { NElement } from "naive-ui";

    defineProps<{
        readonly token: Tokens.Generic | Tokens.Space;
    }>();
</script>

<template>
    <template v-for="_ in token.raw.split('\n').length">
        <n-element class="h-.5" />
    </template>
</template>