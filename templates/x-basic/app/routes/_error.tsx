import type { ErrorHandler } from 'hono'

const handler: ErrorHandler = (e, c) => {
  console.error(e.message)
  c.status(500)
  return c.render('Internal Server Error')
}

export default handler
