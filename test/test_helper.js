const mongoose = require('mongoose');
const { mongodb } = require('../src/config');

before(done => {
  mongoose.connect(
    'mongodb://localhost:27017/how_does_one_unit_test',
    { useNewUrlParser: true }
  );

  mongoose.connection
    .once('open', () => {
      done();
    })
    .on('error', error => {
      console.log(error);
    });

  mongoose.set('useFindAndModify', false);
});

beforeEach(async () => {
  const { users } = mongoose.connection.collections;
  try {
    await users.drop();
  } catch (error) {
    console.error(error.errmsg);
  }
});
