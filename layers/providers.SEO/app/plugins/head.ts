import selfInformationConfig from "#layers/pages.self/config/information";
import { isEmptyish, isObjectType, prop } from "remeda";

export default defineNuxtPlugin((nuxt) => {
    const breadcrumb = useBreadcrumb();

    useFavicon(selfInformationConfig.avatar.src);

    useHead({
        htmlAttrs: {
            lang: "zh-CN",
        },
        titleTemplate: (title?: string) =>
            [
                isObjectType(selfInformationConfig.name)
                    ? nuxt.$i18n.t(selfInformationConfig.name.localeKey)
                    : selfInformationConfig.name,
                breadcrumb.items.value.slice(1).map(prop("name")).join(" / "),
                title,
            ]
                .filter((part) => !isEmptyish(part))
                .join(" | "),
    });
});