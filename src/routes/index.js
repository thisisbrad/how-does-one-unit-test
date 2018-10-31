const express = require('express');
const todoRoutes = require('../routes/todoRoutes');

module.exports = config => {
  const router = express.Router();
  router.get('/', (req, res) => {
    res.json({ howdy: 'partner!' });
  });

  router.use('/todos', todoRoutes(config));
  return router;
};
