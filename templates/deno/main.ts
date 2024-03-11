import { Hono } from 'https://deno.land/x/hono@v4.1.0/mod.ts'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

Deno.serve(app.fetch)
