import Router from 'koa-router';

const loginRouter = new Router({
  prefix: '/login'
});

loginRouter.post('/', (ctx, next) =>{
  // const query = ctx.request.query;
  const params = ctx.params;

  ctx.status = 200;
  ctx.body = {
    'user': 'Dennis',
    'pass': 'csdfd'
  };

});

loginRouter.post('/logout', (ctx, next) =>{
  const params = ctx.params;

  ctx.throw(401, 'access_denied', { user: 'no authorized' });
});

export {loginRouter};