// const dev = require('./dev');
// const prod = require('./prod');
// const test = require('./test');

const appname = 'Poovey';

const settings = {
  applicationName: appname
};

// Figures out what set of credentials to return based on enviroment
switch (process.env.NODE_ENV) {
  case 'development':
    module.exports = require('./dev')(settings);
    break;
  case 'test':
    module.exports = require('./test')(settings);
    break;
  default:
    module.exports = require('./prod')(settings);
}
