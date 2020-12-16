'use strict';

const config = require('../config/config.ssr');

module.exports = app => {
  const { router, controller } = app;

  router.get(`/gp/gpControl/*`, controller.api.get);

  config.routes.map(route => {
    router.get(`${route.path}`, controller[route.controller][route.handler]);
  });
};
