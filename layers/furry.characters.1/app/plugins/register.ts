export default defineNuxtPlugin(() => {
    const furryStore = useFurryStore();

    furryStore.characters.push({
        id: 1,

        illustration: {
            src: new URL("../assets/illustration.bin", import.meta.url).toString(),
        },

        name: "暂无名称",
        species: [
            {
                name: "狗",
                percent: 100,
            },
        ],
        species_alias: null,
        description: "其特点是腿部的闪电, 有蓝黄色的大以巴",

        owner: {
            name: "渣渣120",
            href: "/",
        },

        renderExtra() {
            return null;
        },
    });
});