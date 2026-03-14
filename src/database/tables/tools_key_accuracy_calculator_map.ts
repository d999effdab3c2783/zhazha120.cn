import type Database from '@/database'
import { Entity } from 'dexie'

export default class ToolsKeyAccuracyCalculatorMap extends Entity<Database> {
	id!: number
	name!: string
	artist!: string
	mapper!: string
	notes!: number
}