import { serve } from "@hono/node-server";
import { Hono } from "hono";

const REQUEST_ID_HEADER = "x-fc-request-id";

const app = new Hono();

app.post("/initialize", (c) => {
  console.log(`RequestId: ${c.req.header(REQUEST_ID_HEADER)}`);
  return c.text("Initialize");
});

app.post("/invoke", (c) => {
  console.log(`RequestId: ${c.req.header(REQUEST_ID_HEADER)}`);
  return c.text("Invoke");
});

app.get("/", (c) => {
  return c.text("Hono Index!");
});

app.get("/hello", (c) => {
  return c.text("Hello!");
});

const port = 9000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
