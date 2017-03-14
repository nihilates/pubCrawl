//Requirements
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//Setup app to use express
var app = express();

//Connect to database
mongoose.connect('mongodb://localhost/local');
var db = mongoose.connection;
db.on('error', console.error.bind(console, "Kobolds stole your:") );
db.once('open', function() {
  console.log("Tavern\'s open!");
  //Table Schema
  var tavern = new mongoose.Schema({
    name: String,
    theme: String,
    quality: String,
    patrons: Number
  });
});

//Configure the App
app.use(express.static(__dirname + '/public') );
app.use(morgan('dev') );
app.use(bodyParser.urlencoded({'extended': true}) );
app.use(bodyParser.json() );
app.use(methodOverride() );

//Establish listening
app.listen(8080);
console.log("The Pub is Roaring on port 8080");

//Routes
//get reuqests
app.get('/api/tavern', function(req, res) {
});//end of get
//post requests
app.post('/api/tavern', function(req, res) {
});

// var Tavern = mongoose.model('Tavern', {
  // name: String,
  // theme: String,
  // quality: String,
  // patrons: Number
// });

// var Patrons = mongoose.model('Patrons', {
//   name: String,
//   class: String,
//   desc: String,
//   stats: Number
// });