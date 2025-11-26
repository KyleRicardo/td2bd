import type { AppType } from '../../worker'
import { hc } from 'hono/client'

const client = hc<AppType>('http://localhost:5173/')

export { client }