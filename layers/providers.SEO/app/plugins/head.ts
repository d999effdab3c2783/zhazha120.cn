import { isEmptyish } from "remeda";

export default defineNuxtPlugin(() => {
    const appConfig = useAppConfig();

    useFavicon(appConfig.self.avatar.src);

    useHead({
        htmlAttrs: {
            lang: "zh",
        },
        titleTemplate: (name?: string) => {
            if (isEmptyish(name)) {
                return appConfig.self.name;
            }

            return `${appConfig.self.name} | ${name}`;
        },
    });
});