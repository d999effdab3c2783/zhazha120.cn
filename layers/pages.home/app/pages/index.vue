<script lang="ts" setup>
    import { isNullish } from "remeda";

    definePageMeta({
        title: {
            localeKey: "pages.home:name",
        },
    });

    const lenis = useLenis();
    const mitt = useMitt();

    const section2 = useTemplateRef("section2");

    mitt.listen("pages.home.1.down-indicator.clicked", () => {
        if (
            isNullish(lenis.value) ||
            isNullish(section2.value) ||
            isNullish(section2.value.container)
        ) {
            return;
        }

        lenis.value.scrollTo(section2.value.container.$el);
    });
</script>

<template>
    <n-flex :size="0" vertical>
        <SectionsHome1 />
        <SectionsHome2 ref="section2" />
    </n-flex>
</template>