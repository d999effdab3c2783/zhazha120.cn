export default defineNuxtPlugin(() => {
    if (import.meta.env.DEV && typeof useAssetsStore === "function") {
        const assetsStore = useAssetsStore();

        assetsStore.registry.push({
            src: "https://avatars.githubusercontent.com/u/72001477",
            href: new URL("../assets/organizations/72001477.bin", import.meta.url).toString(),
        });

        assetsStore.registry.push({
            src: "https://avatars.githubusercontent.com/u/168070538",
            href: new URL("../assets/organizations/168070538.bin", import.meta.url).toString(),
        });

        assetsStore.registry.push({
            src: "https://avatars.githubusercontent.com/u/108103310",
            href: new URL("../assets/organizations/108103310.bin", import.meta.url).toString(),
        });

        assetsStore.registry.push({
            src: "https://avatars.githubusercontent.com/u/102524977",
            href: new URL("../assets/organizations/102524977.bin", import.meta.url).toString(),
        });

        assetsStore.registry.push({
            src: "https://avatars.githubusercontent.com/u/103052241",
            href: new URL("../assets/organizations/103052241.bin", import.meta.url).toString(),
        });

        assetsStore.registry.push({
            src: "https://avatars.githubusercontent.com/u/180642546",
            href: new URL("../assets/organizations/180642546.bin", import.meta.url).toString(),
        });

        assetsStore.registry.push({
            src: "https://avatars.githubusercontent.com/u/156998119",
            href: new URL("../assets/organizations/156998119.bin", import.meta.url).toString(),
        });
    }
});