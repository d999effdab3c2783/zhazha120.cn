import type { FriendLink } from "#layers/pages.misc/app/types/misc";

export const useFriendLinks = () =>
    Object.values(
        import.meta.glob<FriendLink>("#layers/pages.misc/data/friend_links/*/meta.*", {
            eager: true,
            import: "default",
        }),
    );

export const useFullFriendLinks = () =>
    Object.values(
        import.meta.glob<{
            readonly remoteLogo?: string;
            readonly default: FriendLink;
        }>("#layers/pages.misc/data/friend_links/*/meta.*", {
            eager: true,
        }),
    );