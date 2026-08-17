import type { MaybeLocaleKey } from "#layers/providers.i18n/app/types/i18n";

export interface Stack {
    readonly name: MaybeLocaleKey;

    readonly items: {
        readonly icon: string;
        readonly name: string;
        readonly href: string;
    }[];
}

export interface Organization {
    readonly avatar: string;
    readonly name: string;
    readonly href: string;
}

export interface Project {
    readonly name: MaybeLocaleKey;
    readonly href: string;
}

export interface Competition {
    readonly name: string;
    readonly href: string | null;
}