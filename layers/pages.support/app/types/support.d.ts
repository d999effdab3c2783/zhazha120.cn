export interface QrCodeMethod {
    readonly type: "qrcode";
    readonly name: string;

    readonly image: string | null;
    readonly content: string | null;
}

export interface ExternalMethod {
    readonly type: "external";
    readonly name: string | null;
    readonly href: string;

    readonly comment: string | null;
}

export type Method = QrCodeMethod | ExternalMethod;

export interface Channel {
    readonly name: string;
    readonly methods: Method[];
}