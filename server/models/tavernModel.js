var mongoose = require('mongoose');

var TavernSchema = new mongoose.Schema({
  name: String,
  theme: String,
  quality: String,
  size: Number
});

module.exports = mongoose.model('tavern',TavernSchema)