import type Database from '@/database'
import { Entity } from 'dexie'

export default class MalodyV3DanTimeline extends Entity<Database> {
	id!: number
	name!: string
	completed_at!: string
	video_url!: string
}