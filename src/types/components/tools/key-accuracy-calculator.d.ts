import type ToolsKeyAccuracyCalculatorMap from '@/database/tables/tools_key_accuracy_calculator_map'
import type ToolsKeyAccuracyCalculatorPreset from '@/database/tables/tools_key_accuracy_calculator_preset'

export type RawToolsKeyAccuracyCalculatorPreset = Omit<ToolsKeyAccuracyCalculatorPreset, 'id' | 'map_ids' | 'db' | 'table'> & {
	maps: (Omit<ToolsKeyAccuracyCalculatorMap, 'id' | 'db' | 'table'> & {
		use: boolean
	})[]
}

export type AccuracyInput = number | null