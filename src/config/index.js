const dev = require('./dev');
const prod = require('./prod');

const appname = 'Poovey';

const settings = {
  applicationName: appname
};

// Figures out what set of credentials to return based on enviroment
switch (process.env.NODE_ENV) {
  case 'development':
    module.exports = dev(settings);
    break;
  default:
    module.exports = prod(settings);
}
