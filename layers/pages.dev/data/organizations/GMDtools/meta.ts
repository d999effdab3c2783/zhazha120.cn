import type { Organization } from "../../../app/types/dev";

export const remoteAvatar = "https://avatars.githubusercontent.com/u/298097181";

export default {
    avatar: new URL("./assets/avatar.bin", import.meta.url).toString(),
    name: "GDTools",
    href: "https://github.com/GMDtools",
} satisfies Organization;