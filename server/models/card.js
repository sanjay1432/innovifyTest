var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
cardName: { type: Array},
});

module.exports = mongoose.model('Card', cardSchema);