const serve = require('koa-static');
const path = require('path');

const customSend = require('./custom-send');

module.exports = app => {
  app.use(customSend());
  app.use(serve(path.resolve(process.cwd(), './public')));
};
