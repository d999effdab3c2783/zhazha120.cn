import type { FriendLinkStatuses } from "#layers/pages.misc/app/enums/FriendLink";

export interface FriendLink {
    readonly status?: FriendLinkStatuses;

    readonly logo: string;
    readonly name: string;
    readonly description: string | null;
    readonly href: string;
}