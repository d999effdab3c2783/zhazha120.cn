import type { Dexie } from 'dexie'

// @unocss-include

export default async (database: Dexie) => {
	database.table('dev_stacks')
		.bulkAdd([
			{
				'type': '开发工具',
				'name': 'IntelliJ IDEA',
				'icon': 'i-logos:intellij-idea',
				'href': 'https://www.jetbrains.com/idea'
			},
			{
				'type': '开发工具',
				'name': 'WebStorm',
				'icon': 'i-logos:webstorm',
				'href': 'https://www.jetbrains.com/webstorm'
			},
			{
				'type': '开发工具',
				'name': 'PhpStorm',
				'icon': 'i-logos:phpstorm',
				'href': 'https://www.jetbrains.com/phpstorm'
			},
			{
				'type': '开发工具',
				'name': 'PyCharm',
				'icon': 'i-logos:pycharm',
				'href': 'https://www.jetbrains.com/pycharm'
			},
			{
				'type': '开发工具',
				'name': 'GoLand',
				'icon': 'i-logos:goland',
				'href': 'https://www.jetbrains.com/goland'
			},
			{
				'type': '开发工具',
				'name': 'Rider',
				'icon': 'i-logos:rider',
				'href': 'https://www.jetbrains.com/rider'
			},
			{
				'type': '开发工具',
				'name': 'Visual Studio',
				'icon': 'i-logos:visual-studio',
				'href': 'https://visualstudio.com'
			},
			{
				'type': '开发工具',
				'name': 'Visual Studio Code',
				'icon': 'i-logos:visual-studio-code',
				'href': 'https://code.visualstudio.com'
			},
			{
				'type': '前端',
				'name': 'Yarn',
				'icon': 'i-logos:yarn',
				'href': 'https://yarnpkg.com'
			},
			{
				'type': '前端',
				'name': 'Pnpm',
				'icon': 'i-logos:pnpm',
				'href': 'https://pnpm.io'
			},
			{
				'type': '前端',
				'name': 'Bun',
				'icon': 'i-devicon:bun',
				'href': 'https://bun.sh'
			},
			{
				'type': '前端',
				'name': 'TypeScript',
				'icon': 'i-devicon:typescript',
				'href': 'https://typescriptlang.org'
			},
			{
				'type': '前端',
				'name': 'Vite',
				'icon': 'i-logos:vitejs',
				'href': 'https://vitejs.dev'
			},
			{
				'type': '前端',
				'name': 'Sass & Scss',
				'icon': 'i-logos:sass',
				'href': 'https://sass-lang.com'
			},
			{
				'type': '前端',
				'name': 'TailwindCSS',
				'icon': 'i-devicon:tailwindcss',
				'href': 'https://tailwindcss.com'
			},
			{
				'type': '前端',
				'name': 'UnoCSS',
				'icon': 'i-logos:unocss',
				'href': 'https://unocss.dev'
			},
			{
				'type': '前端',
				'name': 'Vue',
				'icon': 'i-logos:vue',
				'href': 'https://vuejs.org'
			},
			{
				'type': '前端',
				'name': 'Nuxt',
				'icon': 'i-devicon:nuxtjs',
				'href': 'https://nuxt.com'
			},
			{
				'type': '前端',
				'name': 'Naive UI',
				'icon': 'i-logos:naiveui',
				'href': 'https://naiveui.com'
			},
			{
				'type': '后端',
				'name': 'Node.js',
				'icon': 'i-devicon:nodejs',
				'href': 'https://nodejs.org'
			},
			{
				'type': '后端',
				'name': 'Python',
				'icon': 'i-logos:python',
				'href': 'https://python.org'
			},
			{
				'type': '后端',
				'name': 'C#',
				'icon': 'i-devicon:csharp',
				'href': 'https://learn.microsoft.com/zh-cn/dotnet/csharp'
			},
			{
				'type': '后端',
				'name': 'Java',
				'icon': 'i-logos:java',
				'href': 'https://java.com'
			},
			{
				'type': '后端',
				'name': 'PHP',
				'icon': 'i-logos:php',
				'href': 'https://php.net'
			},
			{
				'type': '后端',
				'name': 'Go',
				'icon': 'i-logos:go',
				'href': 'https://go.dev'
			},
			{
				'type': '后端',
				'name': 'Composer',
				'icon': 'i-logos:composer',
				'href': 'https://getcomposer.org'
			},
			{
				'type': '后端',
				'name': 'Laravel',
				'icon': 'i-logos:laravel',
				'href': 'https://laravel.com'
			},
			{
				'type': '基础设施',
				'name': 'Caddy',
				'icon': 'i-catppuccin:caddy',
				'href': 'https://caddyserver.com'
			},
			{
				'type': '基础设施',
				'name': 'OpenList',
				'icon': 'i-custom:openlist',
				'href': 'https://oplist.org'
			},
			{
				'type': '基础设施',
				'name': 'MySQL',
				'icon': 'i-devicon:mysql',
				'href': 'https://mysql.com'
			},
			{
				'type': '基础设施',
				'name': 'MariaDB',
				'icon': 'i-devicon:mariadb',
				'href': 'https://mariadb.org'
			},
			{
				'type': '基础设施',
				'name': 'PostgreSQL',
				'icon': 'i-logos:postgresql',
				'href': 'https://postgresql.org'
			},
			{
				'type': '基础设施',
				'name': 'Redis',
				'icon': 'i-devicon:redis',
				'href': 'https://redis.io'
			},
			{
				'type': '基础设施',
				'name': 'Memcached',
				'icon': 'i-devicon:memcached',
				'href': 'https://memcached.org'
			},
			{
				'type': '运维',
				'name': 'Docker',
				'icon': 'i-devicon:docker',
				'href': 'https://docker.com'
			},
			{
				'type': '运维',
				'name': 'Podman',
				'icon': 'i-devicon:podman',
				'href': 'https://podman.io'
			}
		])
}