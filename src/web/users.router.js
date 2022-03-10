const Router = require('koa-router');
const usersLib = require('../lib/users');
const { withResponseMiddleware } = require('../../lib');

const { UserSerializer } = usersLib;

const router = new Router();

const usersIndexSerializer = new UserSerializer();

router.get(
  '/',
  withResponseMiddleware(
    usersIndexSerializer,
    (ctx) => {
      return usersLib.all({ pageConfig: ctx.state.pageConfig });
    },
    {
      paged: true,
      defaultPageSize: 20,
    },
  ),
);

router.post(
  '/',
  withResponseMiddleware(usersIndexSerializer, (ctx) => usersLib.create(ctx.request.body)),
);

module.exports = router;
