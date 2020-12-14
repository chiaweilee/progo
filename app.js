const open = require ('open');

module.exports = class AppBootHook {
  constructor(app) {
    this.app = app;
  }

  async serverDidReady() {
    await open(`http://localhost:${this.app.config.cluster.listen.port}`);
  }
}
