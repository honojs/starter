import { Hono } from 'hono'
import { SHA256 } from 'crypto-js'
import { basicAuth } from 'hono/basic-auth'

const app = new Hono()

app.use(
  '/auth/*',
  basicAuth({
    username: 'compute',
    password: 'edge',
    hashFunction: (m: string) => SHA256(m).toString(),
  })
)

app.get('/', (c) => c.text('Hello Hono!'))
app.get('/auth/*', (c) => c.text('You are authorized!'))

app.fire()
