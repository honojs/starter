import { Hono } from 'hono/quick'
import { fire } from 'hono/service-worker'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

fire(app)
