import mitt from 'mitt'

export default mitt<{
	readonly 'index:scroll': number
}>()