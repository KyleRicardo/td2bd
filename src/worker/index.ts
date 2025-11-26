import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'

const app = new Hono<{ Bindings: Env }>()

const route = app.get('/api', (c) => c.json({ name: 'Kyle Ricardo' }))

export default app
export type AppType = typeof route
