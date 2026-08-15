export default defineNuxtPlugin(() => {
    const furryStore = useFurryStore();

    furryStore.characters.push({
        id: 1,

        illustration: {
            src: new URL("../assets/illustration.bin", import.meta.url).toString(),
        },

        name: {
            localeKey: "furry.characters.1:name",
        },
        species: [
            {
                name: {
                    localeKey: "furry.characters.1:species.0.name",
                },
                percent: 100,
            },
        ],
        species_alias: null,
        description: {
            localeKey: "furry.characters.1:description",
        },

        owner: {
            name: {
                localeKey: "furry.characters.1:owner",
            },
            href: "/",
        },

        renderExtra() {
            return null;
        },
    });
});