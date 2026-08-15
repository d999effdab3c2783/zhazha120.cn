import QrCode from "#layers/utilities.qrcode/app/components/utilities/qr-code.vue";

// @unocss-include

export default defineNuxtPlugin((nuxt) => {
    const utilitiesStore = useUtilitiesStore();

    utilitiesStore.registry.push({
        icon: "i-tabler:qrcode",
        name: () => nuxt.$i18n.t("utilities.qrcode:name"),

        render() {
            return h(QrCode);
        },
    });
});