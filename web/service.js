const baseUrl = '/gp/gpControl/';
const refreshDuration = 200;

const ctl = cmd => fetch(baseUrl + cmd);

const service = {
  status: cb => {
    ctl('status')
      .then(res => res.json())
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
