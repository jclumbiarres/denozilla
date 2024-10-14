import { Hono, type Context } from 'hono'
import { Content } from './components/layout/Layout.tsx'
const app = new Hono()

app.get('/', (c: Context) => {
  return c.html(Content())
})


Deno.serve(app.fetch)
