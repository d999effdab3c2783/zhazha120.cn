import { isNonNullish } from 'remeda'
import { type Ref, watch } from 'vue'

export const useSync = (mappings: {
	readonly source: Ref
	readonly target: Ref
	readonly afterSync?: () => void
}[]) => {
	mappings.forEach(mapping => {
		watch(mapping.source, newSource => {
			if ( isNonNullish(newSource) ) {
				mapping.target.value = newSource

				if ( isNonNullish(mapping.afterSync) ) {
					mapping.afterSync()
				}
			}
		})
	})
}