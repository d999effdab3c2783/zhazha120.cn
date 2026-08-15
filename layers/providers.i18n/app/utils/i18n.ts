import type { MaybeLocaleKey } from "#layers/providers.i18n/app/types/i18n";
import { isNonNullish, isObjectType } from "remeda";

export const guessLocale = (input: MaybeLocaleKey) => {
    const i18n = useI18n();

    if (isObjectType(input)) {
        if (!i18n.te(input.localeKey)) {
            return null;
        }

        if (isNonNullish(input.params)) {
            return i18n.t(input.localeKey, input.params);
        }

        return i18n.t(input.localeKey);
    }

    return input;
};