function pv (ctx) {
  global.console.log(ctx.path)
  global.console.log('pv() is running')
}

module.exports = () => {
  return async (ctx, next) => {
    pv(ctx)
    await next()
  }
}