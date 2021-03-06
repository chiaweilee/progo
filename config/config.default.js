const resolvePath = path => require('path').resolve(__dirname, path);

module.exports = {
  keys: 'egg-ssr',
  static: {
    prefix: '/',
    dir: [resolvePath('../dist')],
  },
  logger: {
    level: 'NONE',
    consoleLevel: 'NONE',
  },
};
