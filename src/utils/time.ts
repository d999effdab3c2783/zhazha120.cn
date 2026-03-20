export const sleep = async (ms = 0) => {
    return await new Promise<void>((resolve) => {
        setTimeout(async () => {
            resolve();
        }, ms);
    });
};