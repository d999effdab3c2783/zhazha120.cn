export default defineNuxtPlugin(() => {
    const furryStore = useFurryStore();

    furryStore.characters.push({
        id: 3,

        illustration: {
            src: new URL("../assets/illustration.bin", import.meta.url).toString(),
        },

        name: "Untitled_unrevised",
        species: [
            {
                name: "狗",
                percent: 100,
            },
        ],
        species_alias: null,
        description: "数学魔法爱好者",

        owner: {
            name: "Untitled_unrevised",
            href: "https://space.bilibili.com/323748622",
        },

        renderExtra() {
            return null;
        },
    });
});