import { isEmptyish, isObjectType } from "remeda";

export default defineNuxtPlugin((nuxt) => {
    const appConfig = useAppConfig();
    const breadcrumb = useBreadcrumb();

    useFavicon(appConfig.self.avatar.src);

    useHead({
        htmlAttrs: {
            lang: "zh-CN",
        },
        titleTemplate: (title?: string) =>
            [
                isObjectType(appConfig.self.name)
                    ? nuxt.$i18n.t(appConfig.self.name.localeKey)
                    : appConfig.self.name,
                breadcrumb.items.value
                    .slice(1)
                    .map((item) => item.name)
                    .join(" / "),
                title,
            ]
                .filter((part) => !isEmptyish(part))
                .join(" | "),
    });
});