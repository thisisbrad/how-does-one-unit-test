const { assert } = require('chai');
const sinon = require('sinon');
require('sinon-mongoose');

const User = require('../../src/models/User');

describe('Mock Testing of Mongoose Model', () => {
  describe('Fetch all User data', () => {
    // Test will pass if we get all todos
    it('should return all todos', async () => {
      const UserMock = sinon.mock(User); // create a mocked model to test with
      const expectedResult = {
        name: 'Ricky',
        email: 'ricky@sunnyvale.com',
        todos: []
      }; // object used to test against
      UserMock.expects('find').yields(null, expectedResult); // what .find() is expected to return

      // eslint-disable-next-line
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

      // eslint-disable-next-line
      await User.find((err, result) => {
        UserMock.verify();
        UserMock.restore();
        assert.isNull(result); // making sure results is empty and null
        assert.deepEqual(expectedResult, err); // testing expected against outcome
      });
    });
  });

  // Test will pass if the todo is updated based on an ID
  describe("Update a User's todo by id", () => {
    const ricky = new User({
      name: 'Ricky',
      email: 'ricky@sunnyvale.com',
      todos: [{ _id: 12345, title: 'Setup Hockey Camp', checked: false }]
    });

    it('should updated a todo by id', async () => {
      const UserMock = sinon.mock(ricky);
      const todo = UserMock.object;
      const expectedResult = {
        _id: 12345,
        title: 'Setup Hockey Camp',
        checked: true
      };

      UserMock.expects('save')
        .withArgs({ _id: 12345 })
        .yields(null, expectedResult);

      await todo.save({ _id: 12345 }, (err, result) => {
        UserMock.verify();
        UserMock.restore();
        assert.isTrue(result.checked);
      });
    });

    // Test will pass if the todo is not updated based on an ID
    it('should return error if update action is failed', async () => {
      const TodoMock = sinon.mock(ricky);
      const todo = TodoMock.object;
      const expectedResult = { error: 'Connection Timed Out' };

      TodoMock.expects('save')
        .withArgs({ _id: 12345 })
        .yields(expectedResult, null);

      await todo.save({ _id: 12345 }, (err, result) => {
        TodoMock.verify();
        TodoMock.restore();
        assert.isNull(result);
        assert.isNotEmpty(err);
        assert.property(err, 'error');
      });
    });
  });
});
