import 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'

declare module 'hono' {
  interface ContextRenderer {
    (content: string, props?: { title?: string }): Response
  }
}

export const renderer = jsxRenderer(
  ({ children, title }) => {
    return (
      <html>
        <head>
          <link href="/static/style.css" rel="stylesheet" />
          <title>{title}</title>
        </head>
        <body>{children}</body>
      </html>
    )
  },
  {
    docType: true
  }
)
