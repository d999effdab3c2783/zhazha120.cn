export interface Character {
    readonly id: number;
    readonly illustration: {
        readonly src: string;
    };

    readonly name: string;

    readonly species: {
        readonly name: string;
        readonly percent: number;
    }[];

    readonly species_alias: string | null;
    readonly description: string;

    readonly owner: {
        readonly name: string;
        readonly href: string | null;
    };

    renderExtra(): VNode | null;
}