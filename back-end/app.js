var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, _, next) => {
  req.headers.authorization = "authorized";
  console.log(`Going to : ${req.url}`);
  console.log(`headers.authorization : ${req.headers.authorization}`);
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
