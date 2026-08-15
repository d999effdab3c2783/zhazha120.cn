import type { MaybeLocaleKey } from "#layers/providers.i18n/app/types/i18n";

declare module "#app" {
    interface PageMeta {
        readonly title: MaybeLocaleKey;
    }
}

export {};