import { Hono } from 'https://deno.land/x/hono@v3.11.8/mod.ts'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

Deno.serve(app.fetch)
