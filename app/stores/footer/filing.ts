import beian from '~/stores/footer/assets/beian.bin?url'
import type { FooterFiling } from '~/types/footer'

const filingProvinceAbbr = '赣'
const filingIcpCode = 2022005275
const filingSafetyCode = 36070202001088

export default {
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
} as const satisfies FooterFiling