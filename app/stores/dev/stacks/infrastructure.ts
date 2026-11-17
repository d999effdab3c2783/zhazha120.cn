import type { DevStack } from '~/types/dev'

// @unocss-include

export default {
	items: [
		{
			href: 'https://git-scm.com',
			icon: 'i-devicon:git',
			name: 'Git'
		},
		{
			href: 'https://caddyserver.com',
			icon: 'i-catppuccin:caddy',
			name: 'Caddy'
		},
		{
			href: 'https://mysql.com',
			icon: 'i-devicon:mysql',
			name: 'MySQL'
		},
		{
			href: 'https://mariadb.org',
			icon: 'i-devicon:mariadb',
			name: 'MariaDB'
		},
		{
			href: 'https://postgresql.org',
			icon: 'i-logos:postgresql',
			name: 'PostgreSQL'
		},
		{
			href: 'https://redis.io',
			icon: 'i-devicon:redis',
			name: 'Redis'
		},
		{
			href: 'https://memcached.org',
			icon: 'i-devicon:memcached',
			name: 'Memcached'
		},
		{
			href: 'https://oplist.org',
			icon: 'i-custom:openlist',
			name: 'OpenList'
		}
	] as const,
	name: '基础设施',
	sort: 4
} as const satisfies DevStack