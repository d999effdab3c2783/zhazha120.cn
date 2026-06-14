import type { Utility } from "#layers/providers.utilities/app/types/utility";

export const useUtilitiesStore = defineStore("utilities", () => {
	const registry = shallowReactive<Utility[]>([]);

	return {
		registry,
	};
});