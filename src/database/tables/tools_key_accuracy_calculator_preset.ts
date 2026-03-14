import type Database from '@/database'
import { Entity } from 'dexie'

export default class ToolsKeyAccuracyCalculatorPreset extends Entity<Database> {
	id!: number
	name!: string
	require_accuracy!: number
	map_ids!: number[]
}