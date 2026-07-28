export default defineNuxtPlugin(() => {
    if (import.meta.env.DEV && typeof useAssetsStore === "function") {
        const appConfig = useAppConfig();
        const assetsStore = useAssetsStore();

        for (const organization of appConfig.dev.organizations) {
            assetsStore.registry.push(organization.avatar);
        }
    }
});