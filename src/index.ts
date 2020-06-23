import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import { loginRouter } from './login/login-route';
require('dotenv').config();

const app = new Koa();

app.use(bodyParser());
app.use(loginRouter.routes());

app.listen(process.env.PORT, () => {
  console.log('Server running in port: ' + process.env.PORT);
});

export default app;