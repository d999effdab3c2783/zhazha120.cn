import { isEmptyish, isNonNullish, isNullish } from "remeda";

export const useBreadcrumb = () => {
    const router = useRouter();

    const paths = computed(() => router.currentRoute.value.fullPath.split("/").slice(1));

    const items = computed(() =>
        paths.value
            .map((part, index) => {
                if (isEmptyish(part)) {
                    return null;
                }

                const path = paths.value.slice(0, index + 1).join("/");
                const currentPath = path.split("/").at(-1);

                const route = router.resolve({
                    path: `/${path}`,
                });

                if (isNullish(route)) {
                    return null;
                }

                return {
                    name: guessLocaleNuxt(route.meta.title) ?? currentPath,
                    path,
                };
            })
            .filter(isNonNullish),
    );

    return {
        items,
    };
};