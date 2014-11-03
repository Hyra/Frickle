'use strict';

var fs = require('fs');
var express  = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Determin config
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./api/config.js');

// Do we want to use our internal Express API?
var USE_API = true;

// Our app
var app = express();

// Insert LiveReload snippet when in dev mode
if(env === 'development') {
  console.log('App running in development environment');
  var livereload = require('connect-livereload');
  app.use(livereload({port: 35729}));
}

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

if(USE_API) {
  // API Models
  (function(path) {
    fs.readdirSync(path).forEach(function(file) {
      var newPath = path + '/' + file;
      var stat = fs.statSync(newPath);
      if(stat.isFile()) {
        if(/(.*)\.(js|coffee)/.test(file)) {
          require(newPath);
        }
      } else if(stat.isDirectory()) {
        // TODO: Allow for subfolders for models?
      }
    });
  })(__dirname + '/api/models');

  // Connect to MongoDB
  console.log('Connecting to DB:', config.db);
  mongoose.connect(config.db);

  // API Routes
  require('./api/routes')(app);
}

// HTML5 Pushstate mode
app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
});

if(!module.parent) {
  app = app.listen(config.port);
  console.log('App listening on port 8080');
}
