export default defineNuxtPlugin(() => {
    const furryStore = useFurryStore();

    furryStore.characters.push({
        id: 5,

        illustration: {
            src: new URL("../assets/illustration.bin", import.meta.url).toString(),
        },

        name: {
            localeKey: "furry.characters.5:name",
        },
        species: [
            {
                name: {
                    localeKey: "furry.characters.5:species.0.name",
                },
                percent: 100,
            },
        ],
        species_alias: null,
        description: {
            localeKey: "furry.characters.5:description",
        },

        owner: {
            name: {
                localeKey: "furry.characters.5:owner",
            },
            href: "https://osu.ppy.sh/users/6528747",
        },

        renderExtra() {
            return null;
        },
    });
});