import Application, { Context, Next } from "koa"
import { router } from "./route/route"
import { Logger } from "./extend/log"

const app: Application = new Application()
const port: Number = 4321

// -------------------------------------------------- Use logger
app.use(Logger)

async function send(ctx: Context, next: Next) {
  ctx.send = (data: any) => {
    ctx.type = "json"
    ctx.body = {
      data,
    }
  }

  await next()
}

app.use(send)

// -------------------------------------------------- Use Route
app.use(router.routes())

// ========================================================================
// START Application
// ========================================================================
app.listen(port)
