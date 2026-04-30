import { isNonNullish } from "remeda";
import { readonly, type ShallowRef, shallowRef } from "vue";

export const usePublicAssets = () => {
    const prefix = "@/assets/public/";

    const imports = import.meta.glob<{
        readonly default: string;
    }>("@/assets/public/**/*.*", {
        query: "url",
    });

    const cache = new Map<string, ShallowRef<string>>();

    const find = (path: string, defaultPath = "#") => {
        if (cache.has(path)) {
            return cache.get(path);
        }

        const result = shallowRef(defaultPath);

        const findImportPath = Object.keys(imports).find((importPath) => {
            const assetPath = path.split(prefix, 2)[1];

            return importPath.endsWith(assetPath);
        });

        if (isNonNullish(findImportPath)) {
            // oxlint-disable-next-line promise/prefer-await-to-then
            imports[findImportPath]().then((module) => {
                result.value = module.default;
            });
        }

        const realResult = readonly(result);

        cache.set(path, realResult);

        return realResult;
    };

    return {
        find,
    };
};