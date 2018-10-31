const { assert } = require('chai');
const request = require('supertest');
const User = require('../../src/models/User');
const app = require('../../src/app');

describe('Todos list API Integration Tests', () => {
  let userId = '';

  beforeEach(async () => {
    const ricky = new User({
      name: 'Ricky',
      todos: [{ title: 'Get Grade 10', checked: true }]
    }); // create new User for each test
    await ricky.save(); // saves user to MongoDB to test querying
    userId = ricky._id;
  });

  describe('#GET /todos - fecth todos', () => {
    it('should get all tasks', async () => {
      const res = await request(app).get(`/todos/${userId}`);
      assert.strictEqual(res.statusCode, 200);
      assert.isArray(res.body.todos);
      assert.lengthOf(res.body.todos, 1);
    });
  });

  describe('#POST /todos - create task ', () => {
    const todo = {
      title: 'mow grass'
    };

    it('should create a task', async () => {
      try {
        const res = await request(app)
          .post(`/todos/${userId}`)
          .type('json')
          .set('Content-Type', 'application/json')
          .send({ title: 'lame' });
        console.log('DATA???', res.body);
      } catch (error) {
        console.log('error', error);
      }

      // .end((err, res) => {
      //   expect(res.statusCode).to.equal(200);
      //   expect(res.body.name).to.equal('integration test');
      //   task = res.body;
      //   done();
      // });
    });
  });
});
