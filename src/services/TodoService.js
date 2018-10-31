const User = require('../models/User');

const createTodo = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  const { todo } = req.body;
  const count = user.todos.push(todo);
  await user.save();
  const { _id: id, title, checked } = user.todos[count - 1];
  res.json({ todo: { id, title, checked } });
};

const deleteTodo = async (req, res) => {
  try {
    const { todoId, userId } = req.params;
    const user = await User.findById(userId);
    user.todos = user.todos.filter(todo => todo._id.toString() !== todoId);
    await user.save();
    res.json({ success: `Removed ${todoId} from todos.` });
  } catch (error) {
    res.json({ error });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    const { index } = req.body;
    // console.log('User', user.todos, index);
    user.todos[index].checked = !user.todos[index].checked;
    await user.save();
    res.json(user.todos[index]);
  } catch (error) {
    res.json({ error });
  }
};

const fetchTodos = async (req, res) => {
  const { userId } = req.params;
  const results = await User.findById(userId);

  res.json({ todos: results.todos });
};

module.exports = { createTodo, deleteTodo, updateTodo, fetchTodos };
