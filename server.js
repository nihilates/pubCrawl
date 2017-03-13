//Requirements
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
//Setup app to use express
var app = express();

//Connect to database
mongoose.connect('mongodb://localhost/pubCrawl');

//Configure the App
app.use(express.static(__dirname + '/public') );
app.use(morgan('dev') );
app.use(bodyParser.urlencoded({'extended': 'true'}) );
app.use(bodyParser.json() );
app.use(bodyParser.json({ type: 'application/vdn.api+json'}) );
app.use(methodOverride() );

//Establish listening
app.listen(8080);
console.log("The Pub is Roaring on port 8080");