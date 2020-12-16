const Controller = require('egg').Controller;
const baseUrl = 'http://10.5.5.9';

class ApiController extends Controller {
  async get() {
    const { ctx } = this;
    const result = await ctx.curl(baseUrl + ctx.request.url);
    ctx.body = result.data;
  }
}

module.exports = ApiController;
