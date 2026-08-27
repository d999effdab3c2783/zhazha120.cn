import type { FriendLink } from '@/data/friend_links';

export type UseFriendLinksReturn = FriendLink[];

export type UseFullFriendLinksReturn = Array<{
	readonly remoteLogo?: string;
	readonly default: FriendLink;
}>;

export const useFriendLinks = (): UseFriendLinksReturn =>
	Object.values(
		import.meta.glob<FriendLink>('@/data/friend_links/*/meta.*', {
			eager: true,
			import: 'default',
		}),
	);

export const useFullFriendLinks = (): UseFullFriendLinksReturn =>
	Object.values(
		import.meta.glob<UseFullFriendLinksReturn[number]>('@/data/friend_links/*/meta.*', {
			eager: true,
		}),
	);