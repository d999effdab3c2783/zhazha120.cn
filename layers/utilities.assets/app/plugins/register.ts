import UpdateAssets from "#layers/utilities.assets/app/components/utilities/update-assets.vue";

// @unocss-include

export default defineNuxtPlugin(() => {
    if (import.meta.env.DEV) {
        const utilitiesStore = useUtilitiesStore();

        utilitiesStore.registry.push({
            icon: "i-material-symbols:work-update-outline",
            name: "更新资源",

            render() {
                return h(UpdateAssets);
            },
        });
    }
});