import { serve } from 'https://deno.land/std@0.167.0/http/server.ts'
import { Hono } from 'npm:hono@3.1.0'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

serve(app.fetch)
