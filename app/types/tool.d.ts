export type ToolPortal = {
	readonly icon: string
	readonly name: string
	readonly href: string
}

export type KeyAccuracyCalculatorPreset = {
	readonly name: string

	readonly maps: {
		readonly title: string
		readonly notes: number
	}[]

	readonly require_accuracy: number
}

export type KeyAccuracyCalculatorData = {
	readonly name: string

	readonly maps: {
		readonly title: string
		readonly notes: number

		readonly accuracy?: number
	}[]

	readonly require_accuracy: number
}