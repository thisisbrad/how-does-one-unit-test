const createTodo = async (req, res) => {
  const { user } = req;
  const { todo } = req.body;
  const count = user.todos.push(todo);
  await user.save();
  const { _id: id, title, checked } = user.todos[count - 1];
  res.json({ todo: { id, title, checked } });
};

const deleteTodo = async (req, res) => {
  try {
    const { user } = req;
    const { todoId: id } = req.params;
    user.todos = user.todos.filter(todo => todo._id.toString() !== id);
    await user.save();
    res.json({ success: `Removed ${id} from todos.` });
  } catch (error) {
    res.json({ error });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { user } = req;
    const { index } = req.body;
    user.todos[index].available = !user.todos[index].available;
    await user.save();
    res.json(user.todos[index]);
  } catch (error) {
    res.json({ error });
  }
};

const fetchTodos = async (req, res) => {
  res.json({ todos: req.user.todos });
};

module.exports = { createTodo, deleteTodo, updateTodo, fetchTodos };
