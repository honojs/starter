import { fire } from '@fastly/hono-fastly-compute'
import app from './app'

fire(app)
