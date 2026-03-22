import { isNonNullish } from "remeda";
import { readonly, shallowRef } from "vue";

export const usePublicAssets = () => {
    const prefix = `@/assets/public/`;
    const imports = import.meta.glob<{
        readonly default: string;
    }>(`${prefix}**/*.*`, {
        query: "url",
    });

    const find = (path: string, defaultPath = "#") => {
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

        return readonly(result);
    };

    return {
        find,
    };
};