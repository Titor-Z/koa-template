import * as Router from "koa-router"
import { Context, Next } from "koa"

const router: Router = new Router()

router.get('/', async (ctx: Context, next: Next) => {
  ctx.body = "This is Home!"
  await next()
})

router.get('/json', async (ctx: Context, next: Next) => {
  ctx.type = 'json'
  ctx.body = {
    code: "200",
    message: "This is Home!"
  }
  await next()
})

// 导出 router 规则
export default router

