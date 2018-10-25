const { assert } = require('chai');
const User = require('../../src/models/User');

describe('User Model', () => {
  describe('Reading User data from database', () => {
    let ricky; // User object to be tested in suite
    const query = { name: 'Ricky' }; // reuseable query

    beforeEach(async () => {
      ricky = new User(query); // create new User for each test
      await ricky.save();
    });

    it('finds all users with the name Ricky', async () => {
      const users = await User.find(query);
      assert.isArray(users);
      assert.deepEqual(users[0]._id, ricky._id); // eslint-disable-line
    });

    it('finds the user by ID', async () => {
      const { _id } = ricky;
      const user = await User.findById(_id);
      assert.isObject(user);
      assert.propertyVal(user, 'name', 'Ricky');
    });
  });
});
