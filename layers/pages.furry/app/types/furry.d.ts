import type { MaybeLocaleKey } from "#layers/providers.i18n/app/types/i18n";

export interface Character {
    readonly id: number;
    readonly illustration: {
        readonly src: string;
    };

    readonly name: MaybeLocaleKey;

    readonly species: {
        readonly name: MaybeLocaleKey;
        readonly percent: number;
    }[];

    readonly species_alias: MaybeLocaleKey | null;
    readonly description: MaybeLocaleKey;

    readonly owner: {
        readonly name: MaybeLocaleKey;
        readonly href: string | null;
    };

    renderExtra(): VNode | null;
}