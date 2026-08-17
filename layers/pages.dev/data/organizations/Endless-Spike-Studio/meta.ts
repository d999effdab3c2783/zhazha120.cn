import type { Organization } from "../../../app/types/dev";

export const remoteAvatar = "https://avatars.githubusercontent.com/u/102524977";

export default {
    avatar: new URL("./assets/avatar.bin", import.meta.url).toString(),
    name: "Endless Spike Studio",
    href: "https://github.com/Endless-Spike-Studio",
} satisfies Organization;