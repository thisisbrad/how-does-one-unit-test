const { assert } = require('chai');

describe('User Object', () => {
  const user = {}; // declare our user variable so it's in scope for the tests

  before(() => {
    // before the tests we make a user object to test with
    user.name = 'Ricky';
    user.location = 'Sunnyvale';
    user.greeting = () => {
      console.log('You know the TVs With The Click-Clackers');
    };
  });

  describe('properties and methods', () => {
    it('should have a name property on the object', () => {
      assert.isObject(user);
      assert.propertyVal(user, 'name', 'Ricky');
    });

    it('should have a greeting method on the object', () => {
      assert.property(user, 'greeting');
      assert.isFunction(user.greeting);
    });

    it('should have all the properties on the object', () => {
      assert.hasAllKeys(user, ['name', 'location', 'greeting']);
      assert.lengthOf(Object.keys(user), 3, 'object has 3 properties');
    });
  });
});
