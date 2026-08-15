export default defineNuxtPlugin(() => {
    const furryStore = useFurryStore();

    furryStore.characters.push({
        id: 4,

        illustration: {
            src: new URL("../assets/illustration.bin", import.meta.url).toString(),
        },

        name: {
            localeKey: "furry.characters.4:name",
        },
        species: [
            {
                name: {
                    localeKey: "furry.characters.4:species.0.name",
                },
                percent: 50,
            },
            {
                name: {
                    localeKey: "furry.characters.4:species.1.name",
                },
                percent: 50,
            },
        ],
        species_alias: null,
        description: {
            localeKey: "furry.characters.4:description",
        },

        owner: {
            name: {
                localeKey: "furry.characters.4:owner",
            },
            href: "https://space.bilibili.com/519541121",
        },

        renderExtra() {
            return null;
        },
    });
});