import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'

const app = new Hono()

app.use(
  '/auth/*',
  basicAuth({
    username: 'compute',
    password: 'edge',
  })
)

app.get('/', (c) => c.text('Hello Hono!'))
app.get('/auth/*', (c) => c.text('You are authorized!'))

app.fire()
