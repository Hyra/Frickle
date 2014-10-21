var express  = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Determin config
var env = process.env.NODE_ENV || 'development';

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

// HTML5 Pushstate mode
app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
});

if(!module.parent) {
  server = app.listen(8080);
  console.log("App listening on port 8080");
}
