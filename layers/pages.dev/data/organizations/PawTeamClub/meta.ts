import type { Organization } from "../../../app/types/dev";

export const remoteAvatar = "https://avatars.githubusercontent.com/u/156998119";

export default {
    avatar: new URL("./assets/avatar.bin", import.meta.url).toString(),
    name: "PawTeamClub",
    href: "https://github.com/PawTeamClub",
} satisfies Organization;