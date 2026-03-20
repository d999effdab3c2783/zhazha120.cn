<script lang="ts" setup>
    import type { Tokens } from "marked";

    defineProps<{
        readonly token: Tokens.Generic | Tokens.Br;
    }>();
</script>

<template>
    <component is="br" />
</template>