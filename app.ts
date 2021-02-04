import Application from "koa"
import { router } from "./route/route"

// @ts-ignore
import view from "koa-nunjucks-2"


const app: Application = new Application()
const port: Number = 4321


// --------------------------------------------------
// Router
// --------------------------------------------------
app.use(view({
  ext: "njk",
  path: process.cwd() + "/view/",
}))
app.use(router.routes())


// ========================================================================
// START Application
// ========================================================================
app.listen(port)
