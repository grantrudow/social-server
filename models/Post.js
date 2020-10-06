const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Post Schema
const PostSchema = new Schema({
	userId: {
		type: String,
		required: true,
	},
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
	},
	date: {
		type: Date,
		default: Date.now
	}
});

// Exports the Post Schema referencing the above
module.exports = Post = mongoose.model('posts', PostSchema)
