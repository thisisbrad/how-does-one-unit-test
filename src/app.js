const express = require('express');
const morgan = require('morgan');
const { json } = require('body-parser');

const app = express();

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || '127.0.0.1';

app.use(json()); // grabs request body
app.use(morgan('dev')); // logs HTTP request

app.get('/', (req, res) => {
  res.json({ howdy: 'Partner!' });
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error(`Not Found (${req.url})`);
  err.status = 404;
  next(err);
});

const server = app.listen(PORT, HOST, () => {
  console.log(`### Server is listening on PORT: ${server.address().port} ###`);
});
