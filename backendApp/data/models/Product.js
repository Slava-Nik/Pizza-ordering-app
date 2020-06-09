const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = Schema({
	_id: Schema.Types.ObjectId,
	title: {
		type: String,
		required: true,
		unique: true,
	},
	imageSrc: {
		type: String,
	},
	price: {
		type: Number,
		required: true,
	},
	created: {
		type: Date,
		default: Date.now
	},
}, {
	toObject: { virtuals: true },
	toJSON: { virtuals: true }
});

module.exports = mongoose.model("Product",  ProductSchema);