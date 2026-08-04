import { isEmptyish } from "remeda";

export default defineNuxtPlugin(() => {
    const appConfig = useAppConfig();
    const breadcrumb = useBreadcrumb();

    useFavicon(appConfig.self.avatar.src);

    useHead({
        htmlAttrs: {
            lang: "zh-CN",
        },
        titleTemplate: (title?: string) =>
            [
                appConfig.self.name,
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