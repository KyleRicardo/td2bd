import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'

const app = new Hono<{ Bindings: Env }>()

const route = app.get('/api', c => c.json({ name: 'Kyle Ricardo' }))

export default app
export type AppType = typeof route
