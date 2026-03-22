export const resolveObjectArray = async <T extends {}>(input: T[]): Promise<T[]> => {
    return await Promise.all(
        input.map(async (item) => {
            return Object.fromEntries(
                await Promise.all(
                    Object.entries(item).map(async ([key, value]) => {
                        return [key, await value];
                    }),
                ),
            ) as T;
        }),
    );
};