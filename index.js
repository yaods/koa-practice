const koa = require('koa')
const convert = require('koa-convert')
const loggerGenerator = require('./middleware/logger-generator')
const loggerAsync = require('./middleware/logger-async')
const fs = require('fs')
const app = new koa()

const Router = require('koa-router')

// app.use(convert(loggerGenerator()))
// app.use(loggerAsync())
// app.use( async(ctx) => {
//     ctx.body = 'hello koa2'
// })

let home = new Router()
home.get('/', async (ctx)=>{
    let html = `
        <ul>
            <li><a href="/page/helloworld">/page/helloworld</a></li>
            <li><a href="/page/404">/page/404</a></li>
        </ul>
    `
    ctx.body = html
})

// 子路由2
let page = new Router()
page.get('/404', async ( ctx )=>{
  ctx.body = '404 page!'
}).get('/helloworld', async ( ctx )=>{
  ctx.body = 'helloworld page!'
})

// 装载所有子路由
let router = new Router()
router.use('/', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())


app.listen(3000) 
console.log('[demo] start-quick is starting at port 3000')