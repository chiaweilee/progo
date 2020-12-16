const baseUrl = 'http://10.5.5.9/gp/gpControl/';
const refreshDuration = 200;

const ctl = cmd => fetch(baseUrl + cmd);

const service = {
  status: cb => {
    ctl('status')
      .then(cb)
      .catch(() => {
        cb({ status: {} });
      })
      .finally(() => {
        setTimeout(() => {
          service.status(cb);
        }, refreshDuration);
      });
  },
};

export default service;
