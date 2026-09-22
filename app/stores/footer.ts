import { useNow } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed } from 'vue'

import { useBuildInfo } from '#imports'
import beian from '~/assets/images/footer/beian.webp?url'
import type { FooterCopyright, FooterFiling, FooterUtility, FooterVersion } from '~/types/footer'

const now = useNow()

const copyright: FooterCopyright = {
	startYear: 2022,
	endYear: computed(() => {
		return now.value.getFullYear()
	})
} as const

const filingProvinceAbbr = '赣'
const filingIcpCode = 2022005275
const filingSafetyCode = 36070202001088

const filing: FooterFiling = {
	provinceAbbr: filingProvinceAbbr,
	icp: {
		code: filingIcpCode,
		text: `${filingProvinceAbbr} ICP 备 ${filingIcpCode} 号`,
		href: 'https://beian.miit.gov.cn'
	},
	safety: {
		icon: beian,
		code: filingSafetyCode,
		text: `${filingProvinceAbbr}公网安备 ${filingSafetyCode} 号`,
		href: `https://beian.mps.gov.cn/#/query/webSearch?code=${filingSafetyCode}`
	}
} as const

const buildInfo = useBuildInfo()
const versionRepository = 'https://github.com/d999effdab3c2783/zhazha120.cn'

const version: FooterVersion = {
	branch: buildInfo.branch,
	branchHref: `${versionRepository}/commits/${buildInfo.branch}`,
	shortHash: buildInfo.shortCommit,
	hash: buildInfo.commit,
	hashHref: `${versionRepository}/commit/${buildInfo.commit}`
} as const

const utility: FooterUtility = {
	hotkey: 'F8'
} as const

export const useFooterStore = defineStore('footer', () => {
	return {
		copyright,
		filing,
		version,
		utility
	}
})