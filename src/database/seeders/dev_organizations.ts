import config from '@/config/database'
import { convertFile } from '@/utils/blob'
import { convertWebp } from '@/utils/image'
import type { Dexie } from 'dexie'

export default async (database: Dexie) => {
	database.table('dev_organizations')
		.bulkAdd([
			{
				avatar: `${config.reference_prefix}_avatar`,
				name: '26F Studio',
				href: 'https://github.com/26F-Studio',

				_avatar: convertFile(await convertWebp('https://avatars.githubusercontent.com/u/72001477', config.image_quality), '72001477')
			},
			{
				avatar: `${config.reference_prefix}_avatar`,
				name: 'A Minos',
				href: 'https://github.com/A-Minos',

				_avatar: convertFile(await convertWebp('https://avatars.githubusercontent.com/u/168070538', config.image_quality), '168070538')
			},
			{
				avatar: `${config.reference_prefix}_avatar`,
				name: 'Z Team',
				href: 'https://github.com/c794b7b0331e4cf3',

				_avatar: convertFile(await convertWebp('https://avatars.githubusercontent.com/u/108103310', config.image_quality), '108103310')
			},
			{
				avatar: `${config.reference_prefix}_avatar`,
				name: 'Endless Spike Studio',
				href: 'https://github.com/Endless-Spike-Studio',

				_avatar: convertFile(await convertWebp('https://avatars.githubusercontent.com/u/102524977', config.image_quality), '102524977')
			},
			{
				avatar: `${config.reference_prefix}_avatar`,
				name: 'FurDevsCN',
				href: 'https://github.com/FurDevsCN',

				_avatar: convertFile(await convertWebp('https://avatars.githubusercontent.com/u/103052241', config.image_quality), '103052241')
			},
			{
				avatar: `${config.reference_prefix}_avatar`,
				name: 'Furry Chat World',
				href: 'https://github.com/FurryChatWorld',

				_avatar: convertFile(await convertWebp('https://avatars.githubusercontent.com/u/180642546', config.image_quality), '180642546')
			},
			{
				avatar: `${config.reference_prefix}_avatar`,
				name: 'Paw Team Club',
				href: 'https://github.com/PawTeamClub',

				_avatar: convertFile(await convertWebp('https://avatars.githubusercontent.com/u/156998119', config.image_quality), '156998119')
			}
		])
}
7