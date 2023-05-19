import { basicAuth } from 'hono/basic-auth'
import { Hono } from 'hono/quick'

const app = new Hono()

app.use(
  '/auth/*',
  basicAuth({
    username: 'compute',
    password: 'edge'
  })
)

app.get('/', (c) => c.text('Hello Hono!'))
app.get('/auth/*', (c) => c.text('You are authorized!'))

app.fire()
