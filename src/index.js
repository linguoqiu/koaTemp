// const koa = require('koa')
// const path = require('path')
import path from 'path';
import koa from 'koa';
import koaBody from 'koa-body';
import helmet from 'koa-helmet';
import router from './routes/routes';
import jsonUtil from 'koa-json';
import cors from '@koa/cors';
import statics from 'koa-static';
import compose from "koa-compose";
import compress from 'koa-compress';

const app = new koa()
const isDevMode = process.env.NODE_ENV === 'production' ? false : true;
// app.use(helmet())
// app.use(koaBody())
// app.use(router())
/*
 *   使用 koa-compose 集成中间件
 */
const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, '../public')),
  cors(),
  jsonUtil({pretty: false, param: 'pretty'}),
  helmet(),
  router(),
]);
if (!isDevMode) {
  app.use(compress());
}
app.use(middleware)

// console.log('app is running on 3000!')
app.listen(3000)
