import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const config = {
  runtime: 'edge'
}

const app = new Hono().basePath('/api')

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' })
})

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
