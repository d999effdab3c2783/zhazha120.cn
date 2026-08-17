import type { Organization } from "../../../app/types/dev";

export const remoteAvatar = "https://avatars.githubusercontent.com/u/103052241";

export default {
    avatar: new URL("./assets/avatar.bin", import.meta.url).toString(),
    name: "FurDevsCN",
    href: "https://github.com/FurDevsCN",
} satisfies Organization;