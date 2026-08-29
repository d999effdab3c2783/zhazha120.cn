import type { Stack } from '@/data/dev/stacks';

// @unocss-include

export default {
	sort: 5,
	name: '运维',

	items: [
		{
			name: 'Docker',
			icon: 'i-devicon:docker',
			href: 'https://docker.com',
		},
		{
			name: 'Podman',
			icon: 'i-devicon:podman',
			href: 'https://podman.io',
		},
	],
} satisfies Stack;