import type { Dexie } from 'dexie'

export default async (database: Dexie) => {
	database.table('malody_downloads')
		.bulkAdd([
			{
				name: '下载我当前使用的皮肤',
				href: 'https://cdn.zhazha120.cn/download/malody_skin.msz'
			}
		])
}