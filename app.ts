import Application from "koa"
import { router } from "./route/route"
// @ts-ignore
import view from "koa-nunjucks-2"

const cmd = require("colors-console")

const app: Application = new Application()
const port: Number = 4321

// ------------------------------------------------------------
// --------------------------------------------------
// Use View
app.use(
  view({
    ext: "njk",
    path: process.cwd() + "/view/",
  })
)

// Use logger
app.use(async (ctx: Application.Context, next: Application.Next) => {
  let start: Date = new Date()
  await next()
  // @ts-ignore
  let ms: Date = new Date() - start
  console.log(
    `${cmd("cyan", ctx.method)} ${cmd("magentaBG", ctx.url)} - ` +
      cmd("blue", ms + "ms")
  )
})

// Use Route
app.use(router.routes())

// ========================================================================
// START Application
// ========================================================================
app.listen(port)
