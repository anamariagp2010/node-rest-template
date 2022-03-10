const Router = require('koa-router');
const usersRouter = require('./users.router');

const apiRouter = new Router({ prefix: '/api' });

apiRouter.get('/', (ctx) => {
  ctx.body = { hello: 'World' };
});

apiRouter.use('/users', usersRouter.routes());

module.exports = apiRouter;
