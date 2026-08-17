import type { MaybeLocaleKey } from "#layers/providers.i18n/app/types/i18n";
import type { ButtonType } from "naive-ui";

export interface Contact {
    readonly icon: string;
    readonly name: MaybeLocaleKey;
    readonly href: string;

    readonly comment?: MaybeLocaleKey;
}

export interface ExternalLink {
    readonly type?: ButtonType;

    readonly icon: string;
    readonly name: MaybeLocaleKey;
    readonly href: string;

    readonly comment?: MaybeLocaleKey;
}