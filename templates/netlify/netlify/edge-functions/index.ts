import { handle } from 'https://deno.land/x/hono@v3.10.2/adapter/netlify/mod.ts'
import { Hono } from 'https://deno.land/x/hono@v3.10.2/mod.ts'

const app = new Hono()

app.get('/country', (c) => {
  return c.text('Hello Hono!')
})

export default handle(app)
