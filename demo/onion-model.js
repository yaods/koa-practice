/**
 * 当程序运行到await next()的时候就会暂停当前程序，进入下一个中间件，处理完之后才会仔回过头来继续处理。
 */

const Koa = require('koa');

const app = new Koa();
const PORT = 3000;


app.use(async (ctx, next)=>{
    console.log(11)
    await next();
    console.log(12)
});
app.use(async (ctx, next) => {
    console.log(21)
    await next();
    console.log(22)
})

app.use(async (ctx, next) => {
    console.log(3)
})

app.listen(PORT);
console.log(`http://localhost:${PORT}`);