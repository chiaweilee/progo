const path = require('path');
const fs = require('fs');
const Controller = require('egg').Controller;
const renderToStream = require('ykfe-utils/lib/renderToStream');
const ssrConfig = require('../../config/config.ssr');
const debug = require('debug')('progo');
const local = fs.existsSync(path.resolve('local'));

class PageController extends Controller {
  async index() {
    const { ctx } = this;
    try {
      // Page为webpack打包的chunkName，项目默认的entry为Page
      ctx.type = 'text/html';
      ctx.status = 200;
      Object.assign(ctx.app.config, ssrConfig);
      ctx.app.config.baseDir = !local ? path.join(__dirname, '../../../../') : path.resolve('.');
      ctx.body = await renderToStream(ctx, ctx.app.config);
    } catch (error) {
      debug(error);
    }
  }
}

module.exports = PageController;
