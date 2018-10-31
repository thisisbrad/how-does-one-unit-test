const { assert } = require('chai');
const sinon = require('sinon');
require('sinon-mongoose');

const User = require('../../src/models/User');

describe.only('Get all User data', () => {
  // Test will pass if we get all todos
  it('should return all todos', async () => {
    const UserMock = sinon.mock(User);
    const expectedResult = {
      name: 'Ricky',
      email: 'ricky@sunnyvale.com',
      todos: []
    };
    UserMock.expects('find').yields(null, expectedResult);

    await User.find((err, result) => {
      UserMock.verify();
      UserMock.restore();
      assert.deepEqual(expectedResult, result);
    });
  });

  // Test will pass if we fail to get a todo
  it('should return error', async () => {
    const UserMock = sinon.mock(User);
    const expectedResult = {
      error: 'User does not exist'
    };
    UserMock.expects('find').yields(expectedResult, null);

    await User.find((err, result) => {
      UserMock.verify();
      UserMock.restore();
      assert.deepEqual(expectedResult, err);
      assert.isNull(result);
    });
  });
});
