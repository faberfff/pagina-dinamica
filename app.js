const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongoose = require('mongoose');

const mongodb = 'mongodb://127.0.0.1:27017/dados';  


mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => console.log('MongoDB connected', mongodb))
      .catch(err => console.log(err));

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index.routes'));
app.use('/game', require('./routes/game.routes'));
app.use('/create-game.routes', require('./routes/create-game.routes'));


module.exports = app;