import type { MaybeLocaleKey } from "#layers/providers.i18n/app/types/i18n";

export interface QrCodeMethod {
    readonly type: "qrcode";
    readonly name: MaybeLocaleKey;

    readonly image: string | null;
    readonly content: string | null;
}

export interface ExternalMethod {
    readonly type: "external";
    readonly name: MaybeLocaleKey | null;
    readonly href: string;

    readonly comment: MaybeLocaleKey | null;
}

export type Method = QrCodeMethod | ExternalMethod;

export interface Channel {
    readonly name: MaybeLocaleKey;
    readonly methods: Method[];
}