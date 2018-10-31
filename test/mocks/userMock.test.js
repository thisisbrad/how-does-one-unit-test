const { assert } = require('chai');
const sinon = require('sinon');
require('sinon-mongoose');

const User = require('../../src/models/User');

describe.only('Get all User data', () => {
  // Test will pass if we get all todos
  it('should return all todos', async () => {
    const UserMock = sinon.mock(User); // create a mocked model to test with
    const expectedResult = {
      name: 'Ricky',
      email: 'ricky@sunnyvale.com',
      todos: []
    }; // object used to test against
    UserMock.expects('find').yields(null, expectedResult); // what .find() is expected to return

    await User.find((err, result) => {
      UserMock.verify();
      UserMock.restore();
      assert.deepEqual(expectedResult, result); // testing expected against outcome
    });
  });

  // Test will pass if we fail to get a todo
  it('should return error', async () => {
    const UserMock = sinon.mock(User); // create a mocked model to test with
    const expectedResult = {
      error: 'User does not exist'
    }; // object used to test against
    UserMock.expects('find').yields(expectedResult, null); // what .find() is expected to return

    await User.find((err, result) => {
      UserMock.verify();
      UserMock.restore();
      assert.isNull(result); // making sure results is empty and null
      assert.deepEqual(expectedResult, err); // testing expected against outcome
    });
  });
});
