const ok = require('./ok');
const bad = require('./bad');

module.exports = () => {
  return async (ctx, next) => {
    ctx.ok = ok.bind(ctx);
    ctx.bad = bad.bind(ctx);

    await next();
  };
};
