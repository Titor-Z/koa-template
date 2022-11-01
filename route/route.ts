import Router from "koa-router"
import { IndexControl } from "./../controller/index"

const router: Router = new Router()

router.get("/", IndexControl.index)
router.get("/json", IndexControl.json)
router.get("/view", IndexControl.view)

// --------------------------------------------------
// 导出 router 规则
// --------------------------------------------------
export { router }
