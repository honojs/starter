import { SELF } from 'cloudflare:test'
import { expect, it } from 'vite-plus/test'

it('responds with Hello Hono!', async () => {
  const res = await SELF.fetch('https://example.com/')
  expect(res.status).toBe(200)
  expect(await res.text()).toBe('Hello Hono!')
})
