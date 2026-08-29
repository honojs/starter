import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// CloudBase HTTP functions require the server to listen on port 9000
serve({
  fetch: app.fetch,
  port: 9000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
