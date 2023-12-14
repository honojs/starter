import { handle } from 'https://deno.land/x/hono@v3.11.7/adapter/netlify/mod.ts'
import { Hono } from 'https://deno.land/x/hono@v3.11.7/mod.ts'

const app = new Hono()

app.get('/country', (c) => {
  return c.text('Hello Hono!')
})

export default handle(app)
