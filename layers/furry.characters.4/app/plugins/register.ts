export default defineNuxtPlugin(() => {
    const furryStore = useFurryStore();

    furryStore.characters.push({
        id: 4,

        illustration: {
            src: new URL("../assets/illustration.bin", import.meta.url).toString(),
        },

        name: "豌冰",
        species: [
            {
                name: "猫",
                percent: 50,
            },
            {
                name: "狗",
                percent: 50,
            },
        ],
        species_alias: null,
        description: "神秘的舞萌痴与 4k 痴, 食品科学锐意在读中",

        owner: {
            name: "豌冰",
            href: "https://space.bilibili.com/519541121",
        },

        renderExtra() {
            return null;
        },
    });
});