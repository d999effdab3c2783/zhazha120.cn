import { isEmptyish, isNonNullish, isNullish } from "remeda";

export const useBreadcrumb = () => {
    const appConfig = useAppConfig();
    const router = useRouter();

    const items = computed(() => {
        const fullPath = router.currentRoute.value.fullPath;

        return fullPath
            .split("/")
            .map((_path, index) => {
                const path = fullPath
                    .split("/")
                    .slice(0, index + 1)
                    .join("/");

                if (index === 0 && isEmptyish(path)) {
                    return {
                        name: appConfig.self.name,
                        path: "/",
                    };
                }

                const route = router.resolve({
                    path,
                });

                if (isNullish(route)) {
                    return null;
                }

                return {
                    name: route.meta.title ?? path.split("/").at(-1),
                    path,
                };
            })
            .filter(isNonNullish);
    });

    return {
        items,
    };
};