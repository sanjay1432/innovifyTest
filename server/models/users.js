var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
username: { type: String, required: true, index: { unique: true } },
password: { type: String, required: true },
admin: Boolean ,
createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);