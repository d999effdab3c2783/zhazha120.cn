import type { Dexie } from 'dexie'

export default async (database: Dexie) => {
	const moduleMappings = Object.entries(
		import.meta.glob<{
			readonly default: {
				readonly $schema: string
				readonly name: string

				readonly maps: {
					readonly title: string
					readonly notes: number
				}[]

				readonly require_accuracy: number
			}
		}>('@/assets/tools/key-accuracy-calculator/presets/*.json')
	)

	for (const [name, loadModule] of moduleMappings) {
		if ( name.includes('_schema') ) {
			continue
		}

		const preset = (
			await loadModule()
		).default

		await database.table('tools_key_accuracy_calculator_presets')
			.add({
				name: preset.name,
				require_accuracy: preset.require_accuracy,
				map_ids: await Promise.all(
					preset.maps.map(async map => {
						return database.table('tools_key_accuracy_calculator_maps')
							.add({
								name: map.title,
								notes: map.notes
							})
					})
				)
			})
	}
}