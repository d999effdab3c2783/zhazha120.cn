export const xor = (input: string, value: number) => {
    return input
        .split("")
        .map((char) => {
            return String.fromCharCode(char.charCodeAt(0) ^ value);
        })
        .join("");
};