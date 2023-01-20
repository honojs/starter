import { Hono } from 'hono'
import { handle } from 'hono/nextjs'

export const config = {
  runtime: 'edge',
}

const app = new Hono()

app.get((c) => {
  return c.json({
    message: 'Hello from Hono!',
  })
})

export default handle(app)
