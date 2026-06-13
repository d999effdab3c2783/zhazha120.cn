import QrCode from "#layers/utilities.qrcode/components/utilities/qr-code.vue";

// @unocss-include

export default defineNuxtPlugin(() => {
	const utilitiesStore = useUtilitiesStore();

	utilitiesStore.registry.push({
		icon: "i-tabler:qrcode",
		name: "二维码",
		render: () => h(QrCode),
	});
});