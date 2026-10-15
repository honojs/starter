import { handle } from '@hono/vercel'
import app from '@/lib/hono'

export const GET = handle(app)
