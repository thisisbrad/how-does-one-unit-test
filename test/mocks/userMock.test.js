const { assert } = require('chai');
const sinon = require('sinon');
require('sinon-mongoose');

const User = require('../../src/models/User');

/*  Test Suite TOC
 #READ   - test suite for fetching with model
 #UPDATE - test suite for updating with model
 #DELETE - test suite for deleting the model
 #CREATE - test suite for creating the model
 */

describe('Mock Testing of Mongoose Model', () => {
  // #READ
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

  // #UPDATE
  describe("Update a User's todo by id", () => {
    const ricky = new User({
      name: 'Ricky',
      email: 'ricky@sunnyvale.com',
      todos: [{ _id: 12345, title: 'Setup Hockey Camp', checked: false }]
    });

    // Test will pass if the todo is updated based on an ID
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

  // #DELETE
  describe('Delete a todo by id', () => {
    const ricky = new User({
      name: 'Ricky',
      email: 'ricky@sunnyvale.com',
      todos: [{ _id: 12345, title: 'Setup Hockey Camp', checked: false }]
    });

    // Test will pass if the todo is deleted based on an ID
    it('should delete a todo by id', async () => {
      const UserMock = sinon.mock(ricky);
      const user = UserMock.object;
      const expectedResult = { success: 'Removed 12345 from todos.' };

      UserMock.expects('remove')
        .withArgs({ _id: 12345 })
        .yields(null, expectedResult);

      user.remove({ _id: 12345 }, (err, result) => {
        UserMock.verify();
        UserMock.restore();
        assert.property(result, 'success');
      });
    });

    // Test will pass if the todo is not deleted based on an ID
    it('should return error if delete action is failed', async () => {
      const UserMock = sinon.mock(ricky);
      const user = UserMock.object;
      const expectedResult = { error: 'Connection Timed Out' };

      UserMock.expects('remove')
        .withArgs({ _id: 12345 })
        .yields(expectedResult, null);

      user.remove({ _id: 12345 }, (err, result) => {
        UserMock.verify();
        UserMock.restore();
        assert.isNull(result);
        assert.isNotEmpty(err);
        assert.property(err, 'error');
      });
    });
  });

  // #CREATE
  describe('Post a new User', () => {
    const ricky = new User({
      name: 'Ricky',
      email: 'ricky@sunnyvale.com',
      todos: [{ _id: 12345, title: 'Setup Hockey Camp', checked: false }]
    });

    // Test will pass if the todo is saved
    it('should create new User', async () => {
      const UserMock = sinon.mock(ricky);
      const user = UserMock.object;
      const expectedResult = {
        name: 'Ricky',
        email: 'ricky@sunnyvale.com',
        todos: [{ _id: 12345, title: 'Setup Hockey Camp', checked: false }]
      };

      UserMock.expects('save').yields(null, expectedResult);

      await user.save((err, result) => {
        UserMock.verify();
        UserMock.restore();
        assert.deepEqual(expectedResult, result);
        assert.hasAllKeys(result, ['name', 'email', 'todos']);
      });
    });

    // Test will pass if the todo is not saved
    it('should return error, if post not saved', async () => {
      const TodoMock = sinon.mock(ricky);
      const todo = TodoMock.object;
      const expectedResult = { error: 'Email is already taken.' };

      TodoMock.expects('save').yields(expectedResult, null);

      await todo.save((err, result) => {
        TodoMock.verify();
        TodoMock.restore();
        assert.isNull(result);
        assert.isNotEmpty(err);
        assert.property(err, 'error');
      });
    });
  });
});
