import { Hono } from 'hono'
import { fire } from '@fastly/hono-fastly-compute'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

fire(app)
