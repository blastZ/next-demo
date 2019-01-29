const Koa = require('koa');
const mount = require('koa-mount');

const router = require('./router');
const middleware = require('./middleware');
const nextApp = require('./next-app/app');

const app = new Koa();

middleware(app);
router(app);

app.use(mount(nextApp));

app.listen(4096, () => {
  console.log('App is listening at 4096');
});
