import type { Organization } from "#layers/pages.dev/app/types/dev";

export const useOrganizations = () =>
    Object.values(
        import.meta.glob<Organization>("#layers/pages.dev/data/organizations/*/meta.*", {
            eager: true,
            import: "default",
        }),
    );

export const useFullOrganizations = () =>
    Object.values(
        import.meta.glob<{
            readonly remoteAvatar?: string;
            readonly default: Organization;
        }>("#layers/pages.dev/data/organizations/*/meta.*", {
            eager: true,
        }),
    );