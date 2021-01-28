import * as Router from "koa-router"
import { Index as IndexRoute } from "./../controller/index"

const router: Router = new Router()


router.get("/", IndexRoute.index)
router.get("/json", IndexRoute.json)


// --------------------------------------------------
// 导出 router 规则
// --------------------------------------------------
export default router
