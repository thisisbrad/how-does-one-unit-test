// const User = require('../../src/models/User');
// const app = require('../../src/app');

// describe('Todos list API Integration Tests', () => {
//   let userId = '';
//   let todoId = '';
//   const payload = {
//     todo: { title: 'mow grass' },
//   };

//   beforeEach(async () => {
//     const ricky = new User({
//       name: 'Ricky',
//       todos: [{ title: 'Get Grade 10', checked: false }],
//     }); // create new User for each test
//     await ricky.save(); // saves user to MongoDB to test querying
//     // userId = ricky._id;
//     // todoId = ricky.todos[0]._id;
//   });

//   describe('#GET /todos - fecth todos', () => {
//     it('should get all tasks', async () => {
//       // const res = await request(app).get(`/todos/${userId}`);
//     });
//   });

//   describe('#POST /todos - create task ', () => {
//     it('should create a task', async () => {
//       // const res = await request(app).post(`/todos/${userId}`).send(payload);
//       // const { todo } = res.body;
//     });
//   });

//   describe('#PATCH /todos update a todo by index in array', () => {
//     it('should modify a task', async () => {});
//   });

//   describe('#DELETE /todos/:userId/:todoId - remove a todo by id', () => {
//     it('should delete a task', async () => {});
//   });
// });
