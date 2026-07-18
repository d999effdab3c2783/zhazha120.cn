import QrCode from "#layers/utilities.qrcode/app/components/utilities/qr-code.vue";

// @unocss-include

export default defineNuxtPlugin(() => {
    const utilitiesStore = useUtilitiesStore();

    utilitiesStore.registry.push({
        icon: "i-tabler:qrcode",
        name: "二维码",

        render() {
            return h(QrCode);
        },
    });
});