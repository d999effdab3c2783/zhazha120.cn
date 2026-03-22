<script lang="ts" setup>
    import { useHasOverlay } from "@/composables/container";
    import { useZodRegistry } from "@/composables/database";
    import { container } from "@/shared/website";
    import { useGlobalApiStore } from "@/stores/global_api";
    import Clarity from "@microsoft/clarity";
    import { useFavicon, useTitle } from "@vueuse/core";
    import { useDialog, useLoadingBar, useMessage, useModal, useNotification } from "naive-ui";
    import { isEmptyish, isNullish, isString } from "remeda";
    import { computed, onBeforeMount, onMounted, watch } from "vue";
    import { useRoute, useRouter } from "vue-router";
    import { z } from "zod";

    defineOptions({
        name: "SectionsGlobalConfigurer",
    });

    const route = useRoute();
    const router = useRouter();

    const dialog = useDialog();
    const message = useMessage();
    const modal = useModal();
    const notification = useNotification();
    const loadingBar = useLoadingBar();

    const globalApiStore = useGlobalApiStore();
    const hasOverlay = useHasOverlay();

    const { 0: avatar, 1: name } = useZodRegistry(
        z.object({
            "intro.avatar:0": z.string().describe("file"),
            "intro.name:1": z.string(),
        }),
    );

    watch(
        hasOverlay,
        (newHasOverlay) => {
            container.removeAttribute("data-lenis-prevent");

            if (newHasOverlay) {
                container.setAttribute("data-lenis-prevent", "true");
            }
        },
        {
            immediate: true,
        },
    );

    onMounted(async () => {
        useFavicon(avatar);
    });

    onMounted(async () => {
        const title = computed(() => {
            const routeName = isString(route.name) ? route.name : null;

            if (!isEmptyish(name.value)) {
                if (isNullish(routeName)) {
                    return name.value;
                }

                return `${name.value} - ${routeName}`;
            }

            if (isEmptyish(name.value)) {
                return "?";
            }

            return name.value;
        });

        useTitle(title);
    });

    onMounted(async () => {
        router.beforeEach(async () => {
            loadingBar.start();
        });

        router.onError(async () => {
            loadingBar.error();
        });

        router.afterEach(async () => {
            loadingBar.finish();
        });
    });

    onMounted(async () => {
        globalApiStore.dialog = dialog;
        globalApiStore.message = message;
        globalApiStore.modal = modal;
        globalApiStore.notification = notification;
        globalApiStore.loadingBar = loadingBar;
    });

    if (import.meta.env.PROD) {
        onBeforeMount(async () => {
            Clarity.init("oegssgxsei");
        });
    }
</script>

<template />