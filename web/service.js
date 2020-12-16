const baseUrl = 'http://10.5.5.9/gp/gpControl/';

const ctl = async cmd => await (await fetch(baseUrl.concat(cmd))).json();

export default {
  status: () => ctl('status'),
}
