const express = require('express');
const morgan = require('morgan');
const { json, urlencoded } = require('body-parser');
const routeHandler = require('./routes');
// const { mongodb } = require('./config');

/* Logic to start the application */
// console.log('Altas URI?', mongodb.uri);

// Connect the db with the uri provided

const app = express();

/* Start the Node server once connected to MongoDB */
const PORT = process.env.PORT || 5000;
// const HOST = process.env.HOST || '127.0.0.1';

app.use(urlencoded({ extended: false }));
app.use(json()); // grabs request body
app.use(morgan('dev')); // logs HTTP request

// attaches all routes to the app
app.use('/', routeHandler());

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error(`Not Found (${req.url})`);
  err.status = 404;
  next(err);
});

const server = app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`### Server is listening on PORT: ${server.address().port} ###`);
});

module.exports = app;
