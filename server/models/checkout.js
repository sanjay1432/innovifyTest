var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var checkoutSchema = new Schema({
name: { type: String},
cardType: { type: Array},
});

module.exports = mongoose.model('Checkout', checkoutSchema);