import { Hono } from 'hono/quick'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.fire()
