'use strict';

const path = require('path');
const fs = require('fs');

const debug = require('debug')('progo');

const local = fs.existsSync(path.resolve('local'));

if (local) {
  debug('running in local dev mode..');
}

const builtIn = !local ? path.join(__dirname, '../') : path.resolve('.');

debug('running built-in at '.concat(builtIn));

// refactor argv
const [, ...rawOptions] = process.argv.slice(2);
rawOptions.forEach((option, index) => {
  if (!/^--/.test(option)) {
    debug("unknown argv '".concat(option, "' removed"));
    process.argv.splice(index + 3, 1);
  }
});

process.argv.push('start');
process.argv.push('--title=progo');
process.argv.push('--workers=1');
process.argv.push(builtIn);

debug('with argv: '.concat(process.argv.slice(2)));

// next
require('egg-scripts/bin/egg-scripts.js');
