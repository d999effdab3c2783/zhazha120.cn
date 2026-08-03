export default defineNuxtPlugin(() => {
    const furryStore = useFurryStore();

    furryStore.characters.push({
        id: 2,

        illustration: {
            src: new URL("../assets/illustration.bin", import.meta.url).toString(),
        },

        name: "Z",
        species: [
            {
                name: "狗",
                percent: 100,
            },
        ],
        species_alias: "折耳狗",
        description: "头顶有着专属于渣渣的标识图案",

        owner: {
            name: "渣渣120",
            href: "/",
        },

        renderExtra() {
            return null;
        },
    });
});