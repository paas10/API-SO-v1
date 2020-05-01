var express = require('express');
var cors = require('cors');

//Routers

var bodyParser = require('body-parser'); // rollback

var CORS_CONFIG = require('./config/cors.conf');

// routers
var indexRouter = require('./controllers/index');
var jobsRouter = require('./controllers/jobs/jobs.router');

// app init
var app = express();

// establece politicas CORS.
app.use(cors(CORS_CONFIG));

// restablece bodyparse
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/git', jobsRouter);

// passport init
//app.use(authService.passport.initialize());

module.exports = app;