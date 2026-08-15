export default defineNuxtPlugin(() => {
    const furryStore = useFurryStore();

    furryStore.characters.push({
        id: 3,

        illustration: {
            src: new URL("../assets/illustration.bin", import.meta.url).toString(),
        },

        name: {
            localeKey: "furry.characters.3:name",
        },
        species: [
            {
                name: {
                    localeKey: "furry.characters.3:species.0.name",
                },
                percent: 100,
            },
        ],
        species_alias: null,
        description: {
            localeKey: "furry.characters.3:description",
        },

        owner: {
            name: {
                localeKey: "furry.characters.3:owner",
            },
            href: "https://space.bilibili.com/323748622",
        },

        renderExtra() {
            return null;
        },
    });
});