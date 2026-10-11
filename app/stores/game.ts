import { defineStore } from 'pinia'

import { overlay as geometryDashOverlay, portals as geometryDashPortals } from '~/stores/game/records/geometry_dash'
import { divingFishUsername as maimaiDivingFishUsername } from '~/stores/game/records/maimai'
import {
	dan as malodyDan,
	danTimelines as malodyDanTimelines,
	portals as malodyPortals
} from '~/stores/game/records/malody'
import {
	defaultPreviewConfig as minecraftDefaultPreviewConfig,
	portals as minecraftPortals,
	skinSrc as minecraftSkinSrc
} from '~/stores/game/records/minecraft'
import { mania as osuMania, overlay as osuOverlay, portals as osuPortals } from '~/stores/game/records/osu'
import recordsPortals from '~/stores/game/records/portals'
import {
	backgroundOverlay as tetrioBackgroundOverlay,
	blitzTimelines as tetrioBlitzTimelines,
	overlay as tetrioOverlay,
	portals as tetrioPortals,
	rankColors as tetrioRankColors,
	splintTimelines as tetrioSplintTimelines,
	tetraLeagueSeason1Timelines as tetrioTetraLeagueSeason1Timelines,
	tetraLeagueSeason2Timelines as tetrioTetraLeagueSeason2Timelines
} from '~/stores/game/records/tetrio'

export const useGameStore = defineStore('game', () => {
	return {
		records: {
			maimai: {
				divinigFish: {
					username: maimaiDivingFishUsername
				}
			},
			osu: {
				overlay: osuOverlay,
				mania: osuMania,
				portals: osuPortals
			},
			minecraft: {
				skinSrc: minecraftSkinSrc,
				portals: minecraftPortals,
				defaultPreviewConfig: minecraftDefaultPreviewConfig
			},
			malody: {
				dan: malodyDan,
				danTimelines: malodyDanTimelines,
				portals: malodyPortals
			},
			geometryDash: {
				overlay: geometryDashOverlay,
				portals: geometryDashPortals
			},
			tetrio: {
				backgroundOverlay: tetrioBackgroundOverlay,
				overlay: tetrioOverlay,
				splintTimelines: tetrioSplintTimelines,
				blitzTimelines: tetrioBlitzTimelines,
				rankColors: tetrioRankColors,
				tetraLeagueSeason1Timelines: tetrioTetraLeagueSeason1Timelines,
				tetraLeagueSeason2Timelines: tetrioTetraLeagueSeason2Timelines,
				portals: tetrioPortals
			},
			portals: recordsPortals
		}
	}
})