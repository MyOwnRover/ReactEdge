const Koa = require('koa')
const serve = require('koa-static')
const router = require('koa-router')()
const {join} = require('path')
const index = require('./routes/index')

const app = new Koa()
const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3001

// if (dev) {
//   app.use(serve(join(__dirname, 'public')))
// }
// router.use('/', index.routes(), index)
// app.use(router.routes())

app.use( async ( ctx ) => {
  ctx.body = 'hello koa2'
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})