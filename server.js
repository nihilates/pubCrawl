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
var Schema = mongoose.Schema;
var TavernSchema = new Schema({
  name: String,
  patrons: Array,
  size: String,
  theme: String,
  quality: String
});

var Tavern = mongoose.model('Tavern', TavernSchema);

//Routes
//GET
app.get('/api/taverns', function(req, res) {
  Tavern.find(function(err, taverns){
    if (err) {
      res.send(err);
    } else {
      res.json(taverns);
    }
  });
});//end of get
//POST
app.post('/api/taverns', function(req, res) {
  var tavName = roll.makeTavern(req.body.theme, req.body.quality);
  var crowd = roll.makeCrowd(req.body.size, req.body.theme)
  //console.log(crowd);
  Tavern.create({
    name: tavName.name,
    patrons: crowd,
    size: req.body.size,
    theme: req.body.theme,
    quality: req.body.quality
  }, function(err, tavern) {
    if (err) {
      res.send(err);
    } else {
      Tavern.find(function(err, taverns) {
        if (err) {
          res.send(err);
        } else {
          res.json(taverns);
        }
      });
    }
  });

});//end of post
//DELETE
app.delete('/api/taverns/:tavern_id', function(req, res) {
  Tavern.remove({
      _id : req.params.tavern_id
  }, function(err, tavern) {
      if (err) {
        res.send(err);
      } else {
        Tavern.find(function(err, taverns) {
          if (err) {
            res.send(err)
          } else {
            res.json(taverns);
          }
        });
      }
  });
});
//INITIAL SETUP
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

//Establish listening
app.listen(8080);
console.log("The Hearth is Roaring on port 8080");