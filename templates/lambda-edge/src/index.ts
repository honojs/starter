import { Hono } from 'hono'
import { handle } from 'hono/lambda-edge'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export const handler = handle(app)
