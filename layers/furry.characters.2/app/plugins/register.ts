export default defineNuxtPlugin(() => {
    const furryStore = useFurryStore();

    furryStore.characters.push({
        id: 2,

        illustration: {
            src: new URL("../assets/illustration.bin", import.meta.url).toString(),
        },

        name: {
            localeKey: "furry.characters.2:name",
        },
        species: [
            {
                name: {
                    localeKey: "furry.characters.2:species.0.name",
                },
                percent: 100,
            },
        ],
        species_alias: {
            localeKey: "furry.characters.2:species_alias",
        },
        description: {
            localeKey: "furry.characters.2:description",
        },

        owner: {
            name: {
                localeKey: "furry.characters.2:owner",
            },
            href: "/",
        },

        renderExtra() {
            return null;
        },
    });
});