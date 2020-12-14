const resolvePath = path => require('path').resolve(__dirname, path);

module.exports = {
  keys: 'egg-ssr',
  static: {
    prefix: '/',
    dir: [resolvePath('../dist'), resolvePath('../app/public')],
  },
  logger: {
    level: 'NONE',
    consoleLevel: 'NONE',
  },
};
