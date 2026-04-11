import { useRegistryStore } from "#layers/registry/stores/registry";
import QrCode from "#layers/utilities.qrcode/components/utilities/qr-code.vue";

// @unocss-include

export default defineNuxtPlugin(() => {
    const registryStore = useRegistryStore();

    registryStore.utilities.push({
        icon: "i-tabler:qrcode",
        name: "二维码",
        render: () => h(QrCode),
    });
});