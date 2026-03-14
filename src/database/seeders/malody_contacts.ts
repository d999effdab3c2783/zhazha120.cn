import type { Dexie } from 'dexie'

// @unocss-include

export default async (database: Dexie) => {
	database.table('malody_contacts')
		.bulkAdd([
			{
				icon: 'i-ant-design:profile-outlined',
				name: '看我资料',
				href: 'https://m.mugzone.net/accounts/user/239697'
			}
		])
}