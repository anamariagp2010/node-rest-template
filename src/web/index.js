const Router = require('koa-router');
const thingsRouter = require('./things.router');

const apiRouter = new Router({ prefix: '/api' });

apiRouter.use('/things', thingsRouter.routes());

module.exports = apiRouter;
