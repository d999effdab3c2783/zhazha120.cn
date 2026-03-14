import { createAlova } from 'alova'
import adapterFetch from 'alova/fetch'
import vueHook from 'alova/vue'

export const alova = createAlova({
	statesHook: vueHook,
	requestAdapter: adapterFetch()
})