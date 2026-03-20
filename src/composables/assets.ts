import { isNonNullish } from "remeda";
import { type Ref, ref } from "vue";

export const usePublicAssets = () => {
    const modules = import.meta.glob<{
        readonly default: string;
    }>(`@/assets/public/**/*.*`, {
        query: "url",
    });

    return new Proxy({} as Record<string, Ref<string | undefined>>, {
        get(target, prop: string) {
            if (prop in target) {
                return target[prop];
            }

            const url = ref<string>();

            const prefix = "@/assets/public/";
            const matched = Object.keys(modules).find((path) => {
                const assetPath = prop.split(prefix, 2)[1];
                return path.endsWith(assetPath);
            });

            if (isNonNullish(matched)) {
                modules[matched]().then((module) => {
                    url.value = module.default;
                });
            }

            target[prop] = url;

            return url;
        },
    });
};