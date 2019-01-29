const router = require('koa-router')();
const koaBody = require('koa-body');

const CertificatContoller = require('./controller/certificate');

module.exports = app => {
  router.get('/name', async (ctx, next) => {
    ctx.ok('haha');
  });

  router.post(
    '/certificate',
    koaBody({
      formLimit: 5 * 1024,
      multipart: true
    }),
    CertificatContoller.create
  );

  app.use(router.routes());
};
