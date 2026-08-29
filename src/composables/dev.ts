import type { Organization } from '@/data/dev/organizations';
import type { Stack } from '@/data/dev/stacks';

export type UseDevStacksReturn = Stack[];
export type UseDevOrganizationsReturn = Organization[];

export type UseDevFullOrganizationsReturn = Array<{
	readonly remoteAvatar?: string;
	readonly default: Organization;
}>;

export const useDevStacks = (): UseDevStacksReturn =>
	Object.values(
		import.meta.glob<Stack>(['@/data/dev/stacks/*', '!@/data/dev/stacks/*.d.*'], {
			eager: true,
			import: 'default',
		}),
	);

export const useDevOrganizations = (): UseDevOrganizationsReturn =>
	Object.values(
		import.meta.glob<Organization>('@/data/dev/organizations/*/meta.*', {
			eager: true,
			import: 'default',
		}),
	);

export const useFullDevOrganizations = (): UseDevFullOrganizationsReturn =>
	Object.values(
		import.meta.glob<{
			readonly remoteAvatar?: string;
			readonly default: Organization;
		}>('@/data/dev/organizations/*/meta.*', {
			eager: true,
		}),
	);