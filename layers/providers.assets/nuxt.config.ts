export default defineNuxtConfig({
    imports: {
        dirs: ["#layers/providers.assets/app/stores/**"],
    },
    $production: {
        ignore: ["layers/providers.assets/**"],
    },
});