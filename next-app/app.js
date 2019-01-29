const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');
const LRUCache = require('lru-cache');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = new Koa();

const ssrCache = new LRUCache({
  length: function(n, key) {
    return n.toString().length + key.toString().length;
  },
  max: 100 * 1000 * 1000,
  maxAge: 1000 * 60 * 60
});

app.prepare().then(() => {
  const router = new Router();

  router.get('/', async ctx => {
    await renderAndCache(ctx, '/');
  });

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());
});

function getCacheKey(req) {
  return `${req.url}`;
}

async function renderAndCache(ctx, path) {
  const key = getCacheKey(ctx.req);

  // if (ssrCache.has(key)) {
  //   ctx.set('x-cache', 'HIT');
  //   ctx.body = ssrCache.get(key);
  //   return;
  // }
  try {
    const html = await app.renderToHTML(ctx.req, ctx.res, path, ctx.query);
    if (ctx.status !== 200) {
      ctx.body = html;
      return;
    }

    ssrCache.set(key, html);

    ctx.set('x-cache', 'MISS');
    ctx.type = 'html';
    ctx.body = html;
  } catch (err) {
    ctx.responde = false;
    app.renderError(err, ctx.req, ctx.res, path, ctx.query);
  }
}

module.exports = server;
