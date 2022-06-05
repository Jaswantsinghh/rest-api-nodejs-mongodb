var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BookSchema = new Schema({
	user_id: {type: String, required: true},
	room: {type: String, required: true},
}, {timestamps: true});

module.exports = mongoose.model("SingleRoom", BookSchema);