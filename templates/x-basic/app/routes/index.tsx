import { createRoute } from 'honox/factory'
import Counter from '../islands/counter'

export default createRoute((c) => {
  const name = c.req.query('name') ?? 'Hono'
  return c.render(
    <div>
      <title>{name}</title>
      <h1>Hello, {name}!</h1>
      <Counter />
    </div>
  )
})
