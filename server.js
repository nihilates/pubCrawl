//Requirements
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var roll = require('./gen.js');
//Setup app to use express
var app = express();


//Connect to database
mongoose.connect('mongodb://localhost/beta');


//Configure the App with Middleware
app.use(express.static(__dirname + '/public') );
app.use(morgan('dev') );
app.use(bodyParser.urlencoded({'extended': true}) );
app.use(bodyParser.json() );
app.use(bodyParser.json({ type: 'application/vdn.api+json'}) );
app.use(methodOverride() );


//Models
var Tavern = mongoose.model('Tavern', {
  name: String,
  patrons: Array,
  size: String,
  theme: String,
  quality: String
});

var Patron = mongoose.model('Patron', {
  name: String,
  gender: String,
  class: String
});


//List to the Port
app.listen(8080);
console.log("The Hearth is Roaring on port 8080");