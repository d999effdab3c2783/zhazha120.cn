export default defineNuxtConfig({
    $production: {
        ignore: ["layers/utilities.assets/**"],
    },
});