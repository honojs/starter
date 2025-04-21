import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

Bun.serve({
  fetch: app.fetch,
  port: 8080
})
