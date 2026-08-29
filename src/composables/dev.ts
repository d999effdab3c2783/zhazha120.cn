import type { Stack } from '@/data/dev/stacks';

export type UseDevStacksReturn = Stack[];

export const useDevStacks = (): UseDevStacksReturn =>
	Object.values(
		import.meta.glob<Stack>(['@/data/dev/stacks/*', '!@/data/dev/stacks/*.d.*'], {
			eager: true,
			import: 'default',
		}),
	);