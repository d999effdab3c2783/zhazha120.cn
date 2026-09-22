import mitt from 'mitt'

import type { Events } from '~/types/event'

export default mitt<Events>()