import { Context, Next } from "koa"
import chalk from "chalk"

// 最先加载
export async function Logger(ctx: Context, next: Next) {
  let startTime: number = new Date().getTime()

  await next()

  let intrvalTime: string = (new Date().getTime() - startTime).toString() + "ms"

  console.log(
    `${statusModel(ctx.status)} ${chalk.black("·")} ${methodModel(
      ctx.method
    )} ${chalk.black("·")} ${chalk.underline.grey(
      ctx.url.toUpperCase()
    )} ${chalk.black("-")} ${chalk.cyan(intrvalTime)}`
  )
}

function methodModel(method: string) {
  let icon: string = ""
  let met = method.toString()

  switch (met.toLowerCase()) {
    case "get":
      icon = chalk.yellow(met.toUpperCase())
      break
    case "post":
      icon = chalk.blue(met.toUpperCase())
      break
    case "put":
      icon = chalk.magenta(met.toUpperCase())
      break
    case "delete":
      icon = chalk.red(met.toUpperCase())
      break
    default:
      icon = chalk.gray(met.toUpperCase())
      break
  }

  return icon
}

function statusModel(code: number) {
  let resCode: string = ""
  switch (code.toString().substring(0, 1)) {
    case "2":
      resCode = chalk.bgBlue(code)
      break
    case "4":
      resCode = chalk.bgMagenta(code)
      break
    case "5":
      resCode = chalk.bgRed(code)
      break
    default:
      resCode = chalk.bgGray(code)
      break
  }
  return resCode
}
