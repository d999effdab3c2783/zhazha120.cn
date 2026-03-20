import BirthdayRecord from "@/database/tables/birthday_record";
import DevAward from "@/database/tables/dev_award";
import DevOrganization from "@/database/tables/dev_organization";
import DevProject from "@/database/tables/dev_project";
import DevStack from "@/database/tables/dev_stack";
import FriendLink from "@/database/tables/friend_link";
import FurryCharacter from "@/database/tables/furry_character";
import FurryEvent from "@/database/tables/furry_event";
import GeometryDashContact from "@/database/tables/geometry_dash_contact";
import MalodyContact from "@/database/tables/malody_contact";
import MalodyDownload from "@/database/tables/malody_download";
import MalodyV3DanTimeline from "@/database/tables/malody_v3_dan_timeline";
import MinecraftContact from "@/database/tables/minecraft_contact";
import OsuContact from "@/database/tables/osu_contact";
import OsuDownload from "@/database/tables/osu_download";
import Registry from "@/database/tables/registry";
import SelfContact from "@/database/tables/self_contact";
import SelfExternalLink from "@/database/tables/self_external_link";
import TetrioBlitzTimeline from "@/database/tables/tetrio_blitz_timeline";
import TetrioContact from "@/database/tables/tetrio_contact";
import TetrioDownload from "@/database/tables/tetrio_download";
import TetrioRankColorMapping from "@/database/tables/tetrio_rank_color_mapping";
import TetrioSprintTimeline from "@/database/tables/tetrio_sprint_timeline";
import TetrioTetraLeagueSeasonTimeline from "@/database/tables/tetrio_tetra_league_season_timeline";
import ToolsKeyAccuracyCalculatorMap from "@/database/tables/tools_key_accuracy_calculator_map";
import ToolsKeyAccuracyCalculatorPreset from "@/database/tables/tools_key_accuracy_calculator_preset";
import { Dexie, type EntityTable } from "dexie";
import { isNullish } from "remeda";
import { ref } from "vue";

export default class Database extends Dexie {
    readonly ready = ref(false);

    registry!: EntityTable<Registry, "id">;
    friend_links!: EntityTable<FriendLink, "id">;
    self_contacts!: EntityTable<SelfContact, "id">;
    self_external_links!: EntityTable<SelfExternalLink, "id">;
    birthday_records!: EntityTable<BirthdayRecord, "id">;
    dev_organizations!: EntityTable<DevOrganization, "id">;
    dev_stacks!: EntityTable<DevStack, "id">;
    dev_projects!: EntityTable<DevProject, "id">;
    dev_awards!: EntityTable<DevAward, "id">;
    furry_characters!: EntityTable<FurryCharacter, "id">;
    furry_events!: EntityTable<FurryEvent, "id">;
    minecraft_contacts!: EntityTable<MinecraftContact, "id">;
    osu_contacts!: EntityTable<OsuContact, "id">;
    osu_downloads!: EntityTable<OsuDownload, "id">;
    malody_contacts!: EntityTable<MalodyContact, "id">;
    malody_downloads!: EntityTable<MalodyDownload, "id">;
    malody_v3_dan_timelines!: EntityTable<MalodyV3DanTimeline, "id">;
    geometry_dash_contacts!: EntityTable<GeometryDashContact, "id">;
    tetrio_contacts!: EntityTable<TetrioContact, "id">;
    tetrio_downloads!: EntityTable<TetrioDownload, "id">;
    tetrio_rank_color_mappings!: EntityTable<TetrioRankColorMapping, "id">;
    tetrio_sprint_timelines!: EntityTable<TetrioSprintTimeline, "id">;
    tetrio_blitz_timelines!: EntityTable<TetrioBlitzTimeline, "id">;
    tetrio_tetra_league_season_1_timelines!: EntityTable<TetrioTetraLeagueSeasonTimeline, "id">;
    tetrio_tetra_league_season_2_timelines!: EntityTable<TetrioTetraLeagueSeasonTimeline, "id">;
    tools_key_accuracy_calculator_maps!: EntityTable<ToolsKeyAccuracyCalculatorMap, "id">;
    tools_key_accuracy_calculator_presets!: EntityTable<ToolsKeyAccuracyCalculatorPreset, "id">;

    constructor(name = location.host.replaceAll(".", "-").replaceAll(":", "_")) {
        super(name);

        this.version(1).stores({
            registry: "++id, &name, value",

            friend_links: "++id, logo, name, description, href",

            self_contacts: "++id, icon, name, href, tip",
            self_external_links: "++id, icon, name, href",

            birthday_records: "++id, age, content",

            dev_organizations: "++id, avatar, name, href",
            dev_stacks: "++id, type, icon, name, href",
            dev_projects: "++id, name, href",
            dev_awards: "++id, name, href",

            furry_characters:
                "++id, illustration, name, species, species_alias, description, content",
            furry_events:
                "++id, cover, name, short_name, description, start_date, end_date, href, furry_character_ids",

            minecraft_contacts: "++id, icon, name, href",

            osu_contacts: "++id, icon, name, href",
            osu_downloads: "++id, name, href",

            malody_contacts: "++id, icon, name, href",
            malody_downloads: "++id, name, href",
            malody_v3_dan_timelines: "++id, name, completed_at, video_url",

            geometry_dash_contacts: "++id, icon, name, href",

            tetrio_contacts: "++id, icon, name, href",
            tetrio_downloads: "++id, name, href",
            tetrio_rank_color_mappings: "++id, name, value",
            tetrio_sprint_timelines: "++id, time, archived_at",
            tetrio_blitz_timelines: "++id, score, archived_at",
            tetrio_tetra_league_season_1_timelines: "++id, rank, archived_at",
            tetrio_tetra_league_season_2_timelines: "++id, rank, archived_at",

            tools_key_accuracy_calculator_maps: "++id, name, artist, mapper, notes",
            tools_key_accuracy_calculator_presets: "++id, name, require_accuracy, map_ids",
        });

        this.registry.mapToClass(Registry);
        this.friend_links.mapToClass(FriendLink);
        this.self_contacts.mapToClass(SelfContact);
        this.self_external_links.mapToClass(SelfExternalLink);
        this.birthday_records.mapToClass(BirthdayRecord);
        this.dev_organizations.mapToClass(DevOrganization);
        this.dev_stacks.mapToClass(DevStack);
        this.dev_projects.mapToClass(DevProject);
        this.dev_awards.mapToClass(DevAward);
        this.furry_characters.mapToClass(FurryCharacter);
        this.furry_events.mapToClass(FurryEvent);
        this.minecraft_contacts.mapToClass(MinecraftContact);
        this.osu_contacts.mapToClass(OsuContact);
        this.osu_downloads.mapToClass(OsuDownload);
        this.malody_contacts.mapToClass(MalodyContact);
        this.malody_downloads.mapToClass(MalodyDownload);
        this.malody_v3_dan_timelines.mapToClass(MalodyV3DanTimeline);
        this.geometry_dash_contacts.mapToClass(GeometryDashContact);
        this.tetrio_contacts.mapToClass(TetrioContact);
        this.tetrio_downloads.mapToClass(TetrioDownload);
        this.tetrio_rank_color_mappings.mapToClass(TetrioRankColorMapping);
        this.tetrio_sprint_timelines.mapToClass(TetrioSprintTimeline);
        this.tetrio_blitz_timelines.mapToClass(TetrioBlitzTimeline);
        this.tetrio_tetra_league_season_1_timelines.mapToClass(TetrioTetraLeagueSeasonTimeline);
        this.tetrio_tetra_league_season_2_timelines.mapToClass(TetrioTetraLeagueSeasonTimeline);
        this.tools_key_accuracy_calculator_maps.mapToClass(ToolsKeyAccuracyCalculatorMap);
        this.tools_key_accuracy_calculator_presets.mapToClass(ToolsKeyAccuracyCalculatorPreset);
    }

    protected static _instance?: Database;

    static get instance() {
        if (isNullish(this._instance)) {
            this._instance = new Database("zhazha120.cn");
        }

        return this._instance;
    }
}