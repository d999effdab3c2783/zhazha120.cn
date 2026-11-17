import type { DevStack } from '~/types/dev'

// @unocss-include

export default {
	items: [
		{
			href: 'https://docker.com',
			icon: 'i-devicon:docker',
			name: 'Docker'
		},
		{
			href: 'https://podman.io',
			icon: 'i-devicon:podman',
			name: 'Podman'
		}
	] as const,
	name: '运维',
	sort: 5
} as const satisfies DevStack