import type { Events } from '~/types/event'

import mitt from 'mitt'

export default mitt<Events>()