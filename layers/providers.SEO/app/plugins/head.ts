import selfInformationConfig from "#layers/pages.self/config/information";
import { isEmptyish, prop } from "remeda";

export default defineNuxtPlugin(() => {
    useFavicon(selfInformationConfig.avatar.src);

    const breadcrumb = useBreadcrumb();

    useHead({
        htmlAttrs: {
            lang: "zh-CN",
        },
        titleTemplate: (title?: string) =>
            [
                guessLocaleNuxt(selfInformationConfig.name),
                breadcrumb.items.value.slice(1).map(prop("name")).join(" / "),
                title,
            ]
                .filter((part) => !isEmptyish(part))
                .join(" | "),
    });
});