<script lang="ts" setup>
    import { isNullish } from "remeda";

    useSeoMeta({
        title: "首页",
    });

    const lenis = useLenis();
    const mitt = useMitt();

    const _1 = useTemplateRef("_1");
    const _2 = useTemplateRef("_2");

    mitt.listen("pages.home.1.down-indicator.clicked", () => {
        if (isNullish(lenis.value) || isNullish(_2.value) || isNullish(_2.value.container)) {
            return;
        }

        lenis.value.scrollTo(_2.value.container.$el);
    });
</script>

<template>
    <n-flex :size="0" vertical>
        <SectionsHome1 ref="_1" />
        <SectionsHome2 ref="_2" />
    </n-flex>
</template>