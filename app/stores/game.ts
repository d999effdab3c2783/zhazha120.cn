import { defineStore } from 'pinia'

import {
	overlay as geometryDashOverlay,
	portals as geometryDashPortals
} from '~/stores/owner/game/records/geometry_dash'
import { divingFishUsername as maimaiDivingFishUsername } from '~/stores/owner/game/records/maimai'
import {
	dan as malodyDan,
	danTimelines as malodyDanTimelines,
	portals as malodyPortals
} from '~/stores/owner/game/records/malody'
import {
	defaultPreviewConfig as minecraftDefaultPreviewConfig,
	portals as minecraftPortals,
	skinSrc as minecraftSkinSrc
} from '~/stores/owner/game/records/minecraft'
import { mania as osuMania, overlay as osuOverlay, portals as osuPortals } from '~/stores/owner/game/records/osu'
import recordsPortals from '~/stores/owner/game/records/portals'
import {
	backgroundOverlay as tetrioBackgroundOverlay,
	blitzTimelines as tetrioBlitzTimelines,
	overlay as tetrioOverlay,
	portals as tetrioPortals,
	rankColors as tetrioRankColors,
	splintTimelines as tetrioSplintTimelines,
	tetraLeagueSeason1Timelines as tetrioTetraLeagueSeason1Timelines,
	tetraLeagueSeason2Timelines as tetrioTetraLeagueSeason2Timelines
} from '~/stores/owner/game/records/tetrio'

export const useGameStore = defineStore('game', () => {
	return {
		records: {
			geometryDash: {
				overlay: geometryDashOverlay,
				portals: geometryDashPortals
			},
			maimai: {
				divinigFish: {
					username: maimaiDivingFishUsername
				}
			},
			malody: {
				dan: malodyDan,
				danTimelines: malodyDanTimelines,
				portals: malodyPortals
			},
			minecraft: {
				defaultPreviewConfig: minecraftDefaultPreviewConfig,
				portals: minecraftPortals,
				skinSrc: minecraftSkinSrc
			},
			osu: {
				mania: osuMania,
				overlay: osuOverlay,
				portals: osuPortals
			},
			portals: recordsPortals,
			tetrio: {
				backgroundOverlay: tetrioBackgroundOverlay,
				blitzTimelines: tetrioBlitzTimelines,
				overlay: tetrioOverlay,
				portals: tetrioPortals,
				rankColors: tetrioRankColors,
				splintTimelines: tetrioSplintTimelines,
				tetraLeagueSeason1Timelines: tetrioTetraLeagueSeason1Timelines,
				tetraLeagueSeason2Timelines: tetrioTetraLeagueSeason2Timelines
			}
		}
	}
})