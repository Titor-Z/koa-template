import Application from "koa"
import router from "./route/route"

const app: Application = new Application();
const port: Number = 4321;


// --------------------------------------------------
// Router
// --------------------------------------------------
app.use(router.routes())


// ========================================================================
// START Application
// ========================================================================
app.listen(port)
