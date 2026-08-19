import { isNonNullish, isNullish } from "remeda";

export const useBreadcrumb = () => {
    const router = useRouter();
    const nuxtApp = useNuxtApp();

    const items = computed(() =>
        router.currentRoute.value.fullPath
            .split("/")
            .reduce(
                (breadcrumbs, currentPath, index, paths) => {
                    const buildPartialPath = (count: number) => paths.slice(0, count).join("/");
                    const path = buildPartialPath(index + 1);

                    const add = (path: string) => {
                        const route = router.resolve({
                            path,
                        });

                        breadcrumbs.push({
                            name: guessLocaleNuxt(route.meta.title) ?? currentPath,
                            path,
                        });
                    };

                    switch (index) {
                        case 0:
                            const possibleLocale = buildPartialPath(2).substring(1);

                            const locale = nuxtApp.$i18n.locales.value.find(
                                ({ code }) => possibleLocale === code,
                            );

                            if (isNullish(locale)) {
                                add("/");
                            }
                            break;
                        default:
                            add(path);
                            break;
                    }

                    return breadcrumbs;
                },
                [] as {
                    readonly name: string;
                    readonly path: string;
                }[],
            )
            .filter(isNonNullish),
    );

    return {
        items,
    };
};