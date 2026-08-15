import UpdateAssets from "#layers/utilities.assets/app/components/utilities/update-assets.vue";

// @unocss-include

export default defineNuxtPlugin((nuxt) => {
    if (import.meta.env.DEV) {
        const utilitiesStore = useUtilitiesStore();

        utilitiesStore.registry.push({
            icon: "i-material-symbols:work-update-outline",
            name: () => nuxt.$i18n.t("utilities.assets:name"),

            render() {
                return h(UpdateAssets);
            },
        });
    }
});