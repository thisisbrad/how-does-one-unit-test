const { Router } = require('express');
const {
  createTodo,
  fetchTodos,
  updateTodo,
  deleteTodo
} = require('../services/TodoService');

module.exports = () => {
  const routes = new Router();
  routes.get('/:userId', fetchTodos);
  routes.post('/:userId', createTodo);
  routes.patch('/:userId', updateTodo);
  routes.delete('/:userId/:todoId', deleteTodo);

  return routes;
};
