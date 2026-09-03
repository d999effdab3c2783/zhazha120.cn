import type { FriendLink } from '@/data/friend_links';

export type UseFriendLinksReturn = Promise<FriendLink[]>;

export type UseFullFriendLinksReturn = Promise<
	Array<{
		readonly remoteLogo?: string;
		readonly default: FriendLink;
	}>
>;

export const useFriendLinks = async (): UseFriendLinksReturn =>
	Promise.all(
		Object.values(
			import.meta.glob<FriendLink>('@/data/friend_links/*/meta.*', {
				import: 'default',
			}),
		).map(async (loader) => {
			return loader();
		}),
	);

export const useFullFriendLinks = async (): UseFullFriendLinksReturn =>
	Promise.all(
		Object.values(import.meta.glob<Awaited<UseFullFriendLinksReturn>[number]>('@/data/friend_links/*/meta.*')).map(
			async (loader) => {
				return loader();
			},
		),
	);