import { Context, Next } from "koa"

export class IndexControl {
  static async index(ctx: Context, next: Next): Promise<any> {
    ctx.body = "This is Home!"
    await next()
  }

  static async json(ctx: Context, next: Next): Promise<any> {
    ctx.send({ name: "titor" })

    await next()
  }

  static async view(ctx: Context) {
    await ctx.render("index", {
      name: "titor",
    })
  }
}
