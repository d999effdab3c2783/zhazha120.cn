import type { Organization } from '@/data/dev/organizations';
import type { Stack } from '@/data/dev/stacks';

export type UseDevStacksReturn = Promise<Stack[]>;
export type UseDevOrganizationsReturn = Promise<Organization[]>;

export type UseDevFullOrganizationsReturn = Promise<
	Array<{
		readonly remoteAvatar?: string;
		readonly default: Organization;
	}>
>;

export const useDevStacks = async (): UseDevStacksReturn =>
	Promise.all(
		Object.values(
			import.meta.glob<Stack>(['@/data/dev/stacks/*', '!@/data/dev/stacks/*.d.*'], {
				import: 'default',
			}),
		).map(async (loader) => {
			return loader();
		}),
	);

export const useDevOrganizations = async (): UseDevOrganizationsReturn =>
	Promise.all(
		Object.values(
			import.meta.glob<Organization>('@/data/dev/organizations/**/meta.*', {
				import: 'default',
			}),
		).map(async (loader) => {
			return loader();
		}),
	);

export const useFullDevOrganizations = async (): UseDevFullOrganizationsReturn =>
	Promise.all(
		Object.values(
			import.meta.glob<{
				readonly remoteAvatar?: string;
				readonly default: Organization;
			}>('@/data/dev/organizations/**/meta.*'),
		).map(async (loader) => {
			return loader();
		}),
	);