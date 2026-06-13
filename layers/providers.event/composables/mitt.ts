import mitt from "#layers/providers.event/shared/mitt";

export const useMitt = () => {
	const listen = (type: string, handler: (...args: unknown[]) => void) => {
		mitt.on(type, handler);

		onScopeDispose(() => {
			mitt.off(type, handler);
		});
	};

	return {
		instance: mitt,
		listen,
	};
};