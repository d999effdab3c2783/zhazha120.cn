import type { Stack } from "#layers/pages.dev/app/types/dev";

export const useStacks = () =>
    Object.values(
        import.meta.glob<Stack>("#layers/pages.dev/config/stacks/*", {
            eager: true,
            import: "default",
        }),
    );