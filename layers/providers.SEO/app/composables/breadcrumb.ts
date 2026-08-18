import { isEmptyish, isNonNullish, isNullish, isObjectType } from "remeda";
import selfInformationConfig from "#layers/pages.self/config/information";

export const useBreadcrumb = () => {
    const router = useRouter();
    const nuxtApp = useNuxtApp();

    const items = computed(() => {
        const fullPath = router.currentRoute.value.fullPath;

        return fullPath
            .split("/")
            .map((_path, index) => {
                const path = fullPath
                    .split("/")
                    .slice(0, index + 1)
                    .join("/");

                if ([0, 1].includes(index) || isEmptyish(path)) {
                    if (index === 0) {
                        return {
                            name: isObjectType(selfInformationConfig.name)
                                ? nuxtApp.$i18n.t(selfInformationConfig.name.localeKey)
                                : selfInformationConfig.name,
                            path: "/",
                        };
                    }

                    if (index === 1) {
                        const locale = nuxtApp.$i18n.locales.value.find(
                            ({ code }) => path.substring(1) === code,
                        );

                        if (isNonNullish(locale)) {
                            return {
                                name: `[${locale.name}]`,
                                path: undefined,
                            };
                        }
                    }
                }

                const route = router.resolve({
                    path,
                });

                if (isNullish(route)) {
                    return null;
                }

                return {
                    name: (() => {
                        const title = isObjectType(route.meta.title)
                            ? nuxtApp.$i18n.t(route.meta.title.localeKey)
                            : route.meta.title;

                        if (!isEmptyish(title)) {
                            return title;
                        }

                        return path.split("/").at(-1);
                    })(),
                    path,
                };
            })
            .filter(isNonNullish);
    });

    return {
        items,
    };
};