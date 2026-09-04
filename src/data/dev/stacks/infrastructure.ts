import type { Stack } from '@/data/dev/stacks'

// @unocss-include

export default {
	sort: 4,
	name: '基础设施',

	items: [
		{
			name: 'Caddy',
			icon: 'i-catppuccin:caddy',
			href: 'https://caddyserver.com'
		},
		{
			name: 'MySQL',
			icon: 'i-devicon:mysql',
			href: 'https://mysql.com'
		},
		{
			name: 'MariaDB',
			icon: 'i-devicon:mariadb',
			href: 'https://mariadb.org'
		},
		{
			name: 'PostgreSQL',
			icon: 'i-logos:postgresql',
			href: 'https://postgresql.org'
		},
		{
			name: 'Redis',
			icon: 'i-devicon:redis',
			href: 'https://redis.io'
		},
		{
			name: 'Memcached',
			icon: 'i-devicon:memcached',
			href: 'https://memcached.org'
		},
		{
			name: 'OpenList',
			icon: 'i-custom:openlist',
			href: 'https://oplist.org'
		}
	] as const
} satisfies Stack