import { serve } from 'https://deno.land/std@0.167.0/http/server.ts'
import { Hono } from 'https://deno.land/x/hono@v2.7.2/mod.ts'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

serve(app.fetch)
