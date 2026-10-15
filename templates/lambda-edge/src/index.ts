import { handle } from '@hono/lambda-edge'
import app from './app'

export const handler = handle(app)
