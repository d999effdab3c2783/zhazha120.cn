import { createDate } from '@/utils/date'
import type { Dexie } from 'dexie'

export default async (database: Dexie) => {
	database.table('tetrio_sprint_timelines')
		.bulkAdd([
			{
				time: 58.620,
				archived_at: createDate(2022, 4, 30).toISOString()
			},
			{
				time: 48.877,
				archived_at: createDate(2022, 7, 18).toISOString()
			},
			{
				time: 42.653,
				archived_at: createDate(2022, 9, 21).toISOString()
			},
			{
				time: 39.685,
				archived_at: createDate(2022, 11, 9).toISOString()
			},
			{
				time: 34.503,
				archived_at: createDate(2022, 11, 28).toISOString()
			},
			{
				time: 28.225,
				archived_at: createDate(2023, 2, 9).toISOString()
			},
			{
				time: 24.593,
				archived_at: createDate(2023, 8, 23).toISOString()
			},
			{
				time: 23.260,
				archived_at: createDate(2023, 9, 21).toISOString()
			},
			{
				time: 22.857,
				archived_at: createDate(2024, 3, 6).toISOString()
			},
			{
				time: 21.633,
				archived_at: createDate(2024, 6, 5).toISOString()
			},
			{
				time: 21.483,
				archived_at: createDate(2024, 8, 5).toISOString()
			},
			{
				time: 21.458,
				archived_at: createDate(2024, 11, 9).toISOString()
			},
			{
				time: 21.067,
				archived_at: createDate(2025, 2, 8).toISOString()
			},
			{
				time: 20.103,
				archived_at: createDate(2025, 2, 24).toISOString()
			},
			{
				time: 19.793,
				archived_at: createDate(2025, 3, 12).toISOString()
			},
			{
				time: 19.783,
				archived_at: createDate(2025, 4, 13).toISOString()
			}
		])
}