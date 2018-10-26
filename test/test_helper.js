const mongoose = require('mongoose');
const { mongodb } = require('../src/config');

before(done => {
  mongoose.connect(
    mongodb.uri,
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
    // console.error('bug?', error.errmsg);
  }
});
