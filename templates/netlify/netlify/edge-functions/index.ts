import { Hono } from 'https://deno.land/x/hono@v3.4.1/mod.ts'
import { prettyJSON } from 'https://deno.land/x/hono@v3.4.1/middleware.ts'
import { handle, type Env } from 'https://deno.land/x/hono@v3.4.1/adapter/netlify/mod.ts'

const app = new Hono<Env>()

app.get('/country', prettyJSON(), (c) =>
  c.json({
    'You are in': c.env.context.geo.country?.name
  })
)

export default handle(app)
